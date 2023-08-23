import { Component } from '@angular/core';
import { HomeService } from '../../service/home-service.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/common/services/data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  protected availableServices = [
    { label: 'User Management', route: '' },
    { label: 'Approval Management', route: '' },
    { label: 'My Activity', route: '' },
    {
      label: 'Authorization Management',
      route: '/admindashboard/authorization-management',
    },
  ];
  protected currentRoute!: string;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getPostLoginData();
    this.dataService.currentRoute.subscribe((value) => {
      this.currentRoute = String(value);
    });
  }

  getPostLoginData = () => {
    forkJoin({
      accountDetails: this.homeService.getAccountDetails(),
      authorizations: this.homeService.getUserAuthorizations(),
    }).subscribe({
      next: (value) => {},
      error: () => {},
    });
  };

  navigateToService = (routerLink: string) => {
    this.router.navigateByUrl(routerLink);
  };
}
