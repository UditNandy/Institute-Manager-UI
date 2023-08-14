import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { Utils } from 'src/utils/utils';

@Component({
  selector: 'app-create-authorization-profile',
  templateUrl: './create-authorization-profile.component.html',
  styleUrls: ['./create-authorization-profile.component.css'],
})
export class CreateAuthorizationProfileComponent {
  protected authorizationProfileForm: FormGroup = new FormGroup({});
  protected formControlsList: any;
  protected modalHeading!: string;
  protected systemAvailableProfiles!: any[];
  protected selectedProfiles: any[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) protected data: any) {}

  ngOnInit() {
    this.formControlsList =
      this.data.authorizationFormGroupJSON.formGroups[0].controls;
    this.modalHeading = this.data.modalHeading;
    this.systemAvailableProfiles = this.data.systemAvailableAuthorizations;
    this.authorizationProfileForm = Utils.buildForm(this.formControlsList);

    this.authorizationProfileForm
      .get('profiles')
      ?.valueChanges.subscribe(() => {
        this.selectedProfiles =
          this.authorizationProfileForm.get('profiles')?.value;
      });
  }

  removeProfiles = (profile: string) => {
    this.selectedProfiles = this.selectedProfiles.filter((value) => {
      return value !== profile;
    });
    this.authorizationProfileForm
      .get('profiles')
      ?.setValue(this.selectedProfiles);
  };
}
