import { Component } from '@angular/core';
import { HomeService } from '../../service/home-service.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  protected availableServices = [
    'User Management',
    'Approval Management',
    'My Activity',
  ];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getPostLoginData();
  }

  getPostLoginData = () => {
    forkJoin({
      accountDetails: this.homeService.getAccountDetails(),
      authorizations: this.homeService.getUserAuthorizations(),
    }).subscribe({
      next: (value) => {
      },
      error: () => {},
    });
  };
}
