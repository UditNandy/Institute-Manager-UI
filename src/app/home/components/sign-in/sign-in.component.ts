import { Component } from '@angular/core';
import {
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  protected loginForm = new FormGroup({});

  ngOnInit() {
    this.loginForm = this.buildLoginForm();
  }

  buildLoginForm = (): FormGroup => {
    return new UntypedFormGroup({
      username: new UntypedFormControl('', {
        validators: [Validators.required],
      }),
      password: new UntypedFormControl('', {
        validators: [Validators.required],
      }),
    });
  };

  submitLogin = () => {};
}
