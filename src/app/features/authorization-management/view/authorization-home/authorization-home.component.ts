import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CreateAuthorizationProfileComponent } from '../../modals/create-authorization-profile/create-authorization-profile.component';

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
      headClass: 'w-[70%] text-base',
      rowClass: 'w-[70%] text-base text-[#7A7676]',
    },
    { id: 'actions', name: 'Actions' },
  ];
  constructor(
    private authorizationService: AuthorizationService,
    private dialog: MatDialog
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
        console.log(this.authorizationProfiles);
      },
      error: (error) => {},
    });
  };

  action = (event: any) => {
    console.log(event);
  };

  addNewProfile = () => {
    console.log('Add new profile');
    this.dialog.open(CreateAuthorizationProfileComponent);
  };
}
