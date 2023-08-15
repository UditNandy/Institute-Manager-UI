import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateAuthorizationProfileComponent } from '../../modals/create-authorization-profile/create-authorization-profile.component';
import { Utils } from 'src/utils/utils';
import { forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-authorization-home',
  templateUrl: './authorization-home.component.html',
  styleUrls: ['./authorization-home.component.css'],
})
export class AuthorizationHomeComponent {
  protected authorizationProfiles!: any[];
  protected dataSource: any;
  displayedColumns: any[] = [
    {
      id: 'profileName',
      name: 'Profile',
      headClass: 'w-[70%] font-hindMadurai font-semibold text-base',
      rowClass:
        'w-[70%] font-hindMadurai font-semibold text-base text-[#7A7676]',
    },
    { id: 'actions', name: 'Actions' },
  ];
  constructor(
    private authorizationService: AuthorizationService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.fetchAuthorizationProfiles();
  }

  fetchAuthorizationProfiles = () => {
    this.authorizationService.getAuthorizationProfiles().subscribe({
      next: (value: any) => {
        this.authorizationProfiles = value.data;
        this.authorizationProfiles = this.authorizationProfiles.map(
          (value) => ({
            ...value,
            actions: [
              { type: 'Update', class: 'bg-green-400' },
              { type: 'Delete', class: 'bg-red-400' },
            ],
          })
        );
      },
      error: (error) => {},
    });
  };

  deleteAuthorizationProfile = (profileName: string) => {
    this.authorizationService
      .deleteAuthorizationProfile(profileName)
      .subscribe({
        next: (response: any) => {
          this.snackBar.open(response.message, 'ok');
          this.fetchAuthorizationProfiles();
        },
        error: (error) => {},
      });
  };
  updateAuthorizationProfile = (element: any) => {};

  action = (event: any) => {
    console.log(event);
    const action = event.action;

    switch (action) {
      case 'Delete':
        this.deleteAuthorizationProfile(event.element.profileName);
        break;
      case 'Update':
        this.updateAuthorizationProfile(event.element);
        break;
    }
  };

  addNewProfile = () => {
    forkJoin({
      authorizationProfileFormJSON:
        this.authorizationService.getCreateAuthorizationProfileFormDetails(),
      systemAvailableAuthorizations:
        this.authorizationService.getSystemAvaialableAuthorizations(),
    }).subscribe({
      next: (value) => {
        const dialogConfig = Utils.matDialog();
        dialogConfig.width = '600px';
        dialogConfig.data = {
          authorizationFormGroupJSON: value.authorizationProfileFormJSON,
          systemAvailableAuthorizations:
            value.systemAvailableAuthorizations.data.profiles,
          modalHeading: 'Create Authorization Profile',
        };
        this.dialog
          .open(CreateAuthorizationProfileComponent, dialogConfig)
          .afterClosed()
          .subscribe((dialogReturnValue) => {
            if (dialogReturnValue) {
              this.authorizationService
                .createAuthorizationProfile(dialogReturnValue)
                .subscribe({
                  next: () => {
                    this.fetchAuthorizationProfiles();
                  },
                  error: () => {},
                });
            }
          });
      },
      error: (error) => {},
    });
  };
}
