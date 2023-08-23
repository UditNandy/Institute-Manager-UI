import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AuthorizationHomeComponent } from '../features/authorization-management/view/authorization-home/authorization-home.component';
import { AuthGuard } from '../common/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
    children: [
      { path: '', component: SignInComponent },
      {
        path: 'admindashboard',
        canActivate: [AuthGuard],
        component: AdminDashboardComponent,
        children: [
          {
            path: 'authorization-management',
            component: AuthorizationHomeComponent,
          },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
