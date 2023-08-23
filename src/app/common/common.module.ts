import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './interceptors/auth-interceptor/auth-interceptor.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AuthInterceptorService],
  imports: [CommonModule, MatSnackBarModule],
})
export class CommonModule {}
