import { Component } from '@angular/core';
import {
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { HomeService } from '../../service/home-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  protected loginForm = new FormGroup({});
  protected errorMessage: string = '';

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.buildAdminLoginForm();
  }

  buildAdminLoginForm = (): FormGroup => {
    return new UntypedFormGroup({
      username: new UntypedFormControl('', {
        validators: [Validators.required],
      }),
      password: new UntypedFormControl('', {
        validators: [Validators.required],
      }),
    });
  };

  submitAdminLogin = () => {
    const adminLoginPaylaod = {
      id: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.homeService.adminLogin(adminLoginPaylaod).subscribe({
      next: (value) => {
        this.router.navigate(['/admindashboard']);
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
    });
  };
}
