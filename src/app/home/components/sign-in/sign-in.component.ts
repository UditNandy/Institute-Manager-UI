import { Component } from '@angular/core';
import {
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { HomeService } from '../../service/home-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  protected loginForm = new FormGroup({});

  constructor(private homeService: HomeService) {}

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
    console.log(this.loginForm);
    const adminLoginPaylaod = {
      id: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.homeService.adminLogin(adminLoginPaylaod).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => {},
    });
  };
}
