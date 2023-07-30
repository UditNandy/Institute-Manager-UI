import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'admindashboard', component: AdminDashboardComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
