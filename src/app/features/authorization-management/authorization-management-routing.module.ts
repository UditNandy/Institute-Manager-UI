import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationHomeComponent } from './view/authorization-home/authorization-home.component';

const routes: Routes = [{ path: '', component: AuthorizationHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationManagementRoutingModule {}
