import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [SignInComponent, HomeViewComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    HomeRoutingModule,
    JwtModule,
  ],
  exports: [HomeViewComponent],
})
export class HomeModule {}
