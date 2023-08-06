import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationManagementRoutingModule } from './authorization-management-routing.module';
import { AuthorizationHomeComponent } from './view/authorization-home/authorization-home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateAuthorizationProfileComponent } from './modals/create-authorization-profile/create-authorization-profile.component';

@NgModule({
  declarations: [AuthorizationHomeComponent, CreateAuthorizationProfileComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AuthorizationManagementRoutingModule,
    HttpClientModule,
    SharedModule,
    MatDialogModule,
  ],
})
export class AuthorizationManagementModule {}
