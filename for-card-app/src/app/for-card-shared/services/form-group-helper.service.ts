import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FormGroupHelper} from '../model/form-group-helper.model';

@Injectable()
export class FormGroupHelperService {

  constructor(private formBuilder: FormBuilder) {
  }

  addControlToModel(model: FormGroupHelper.Model[]): FormGroupHelper.ModelControl[] {
    return model.map(input => {
      if (input.group) {
        const controls = input.inputs
          .map(nestedInputs => ({...nestedInputs, control: new FormControl('', nestedInputs.validators)}));
        return {...input, control: this.formBuilder.group(this.getControlsFromModel(controls))};
      } else {
        return {...input, control: new FormControl('', input.validators)};
      }
    });
  }

  getControlsFromModel(modelControl: FormGroupHelper.ModelControl[]): FormGroupHelper.Controls {
    return modelControl
      .reduce((obj, item) => ({...obj, [item.inputName]: item.control}), {});
  }

  // Helper method to debug form controls
  public findInvalidControls(formGroup: FormGroup) {
    const invalidControlNames = [];
    const controls = formGroup.controls;
    for (const controlName in controls) {
      if (controls[controlName].invalid) {
        invalidControlNames.push(controlName);
      }
    }
    return invalidControlNames;
  }

}
