import { HttpHeaders } from '@angular/common/http';
import {
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

export class Utils {
  static noAuthHeader = { headers: new HttpHeaders({ apiKey: 'noAuth' }) };

  static matDialog = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '100%';
    dialogConfig.panelClass = 'app-full-bleed-dialog';
    return dialogConfig;
  };

  public static buildForm = (controls: any[]): FormGroup => {
    let validatorsToAdd: any[] = [];
    const formGroup = new UntypedFormGroup({});
    for (let control of controls) {
      validatorsToAdd = Utils.addValidator(control.validators);
      formGroup.addControl(
        control.id,
        new UntypedFormControl(control?.value, validatorsToAdd)
      );
    }
    return formGroup;
  };

  public static addValidator = (validators: any[]): any[] => {
    const validatorsToAdd: any[] = [];
    for (let validator of validators) {
      const validatorType = validator.type;
      switch (validatorType) {
        case 'required':
          validatorsToAdd.push(Validators.required);
          break;
        case 'pattern':
          validatorsToAdd.push(Validators.pattern(validator.value));
          break;
        case 'min':
          validatorsToAdd.push(Validators.minLength(validator.value));
          break;
        case 'max':
          validatorsToAdd.push(Validators.maxLength(validator.value));
          break;
      }
    }
    return validatorsToAdd;
  };
}
