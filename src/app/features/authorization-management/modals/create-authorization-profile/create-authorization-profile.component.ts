import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: any,
    private dialogRef: MatDialogRef<CreateAuthorizationProfileComponent>
  ) {}

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

    if (this.data.action === 'Update') {
      this.presetAuthorizationProfileValue();
    }
  }

  presetAuthorizationProfileValue = () => {
    this.formControlsList.forEach((value: any) => {
      if (this.data.authorizationProfileValues[value.id]) {
        if (value.id === 'profiles') {
          this.data.authorizationProfileValues[value.id].forEach(
            (profile: any) => {
              this.systemAvailableProfiles.forEach((systemProfiles) => {
                if (profile.authCode === systemProfiles.authCode) {
                  this.selectedProfiles.push(systemProfiles);
                  return;
                }
              });
            }
          );
          this.authorizationProfileForm
            .get(value.id)
            ?.setValue(this.selectedProfiles);
        } else {
          this.authorizationProfileForm
            .get(value.id)
            ?.setValue(this.data.authorizationProfileValues[value.id]);
        }
      }
    });
  };

  removeProfiles = (profile: any) => {
    this.selectedProfiles = this.selectedProfiles.filter((value) => {
      return value.authCode !== profile.authCode;
    });
    this.authorizationProfileForm
      .get('profiles')
      ?.setValue(this.selectedProfiles);
  };

  submitAuthorizationProfile = () => {
    this.dialogRef.close(this.authorizationProfileForm.value);
  };
}
