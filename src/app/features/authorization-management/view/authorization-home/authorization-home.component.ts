import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateAuthorizationProfileComponent } from '../../modals/create-authorization-profile/create-authorization-profile.component';
import { Utils } from 'src/utils/utils';
import { forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { disableDebugTools } from '@angular/platform-browser';

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

  action = (event: any) => {
    const action = event.action;
    switch (action) {
      case 'Delete':
        this.deleteAuthorizationProfile(event.element.profileName);
        break;
      case 'Update':
        this.openAuthorizationProfileDialog(event.action, event.element);
        break;
    }
  };

  createAuthorizationProfile = (dialogReturnValue: any) => {
    this.authorizationService
      .createAuthorizationProfile(dialogReturnValue)
      .subscribe({
        next: () => {
          this.fetchAuthorizationProfiles();
        },
        error: () => {},
      });
  };

  updateAuthorizationProfile = (dialogReturnValue: any) => {
    this.authorizationService
      .updateAuthorizationProfile(dialogReturnValue)
      .subscribe({
        next: (response) => {
          this.fetchAuthorizationProfiles();
        },
        error: (error) => {},
      });
  };

  openAuthorizationProfileDialog = (action: string, value: any = {}) => {
    const modalHeading =
      action === 'Add'
        ? 'Create Authorization Profile'
        : 'Update Authorization Profile';

    forkJoin({
      authorizationProfileFormJSON:
        this.authorizationService.getCreateAuthorizationProfileFormDetails(),
      systemAvailableAuthorizations:
        this.authorizationService.getSystemAvaialableAuthorizations(),
    }).subscribe({
      next: (response) => {
        const dialogConfig = Utils.matDialog();
        dialogConfig.width = '600px';
        dialogConfig.data = {
          authorizationFormGroupJSON: response.authorizationProfileFormJSON,
          systemAvailableAuthorizations:
            response.systemAvailableAuthorizations.data.profiles,
          authorizationProfileValues: value,
          modalHeading: modalHeading,
          action: action,
        };
        this.dialog
          .open(CreateAuthorizationProfileComponent, dialogConfig)
          .afterClosed()
          .subscribe((dialogReturnValue) => {
            if (dialogReturnValue) {
              if (action === 'Add')
                this.createAuthorizationProfile(dialogReturnValue);
              else if (action === 'Update') {
                this.updateAuthorizationProfile(dialogReturnValue);
              }
            }
          });
      },
      error: (error) => {},
    });
  };
}
