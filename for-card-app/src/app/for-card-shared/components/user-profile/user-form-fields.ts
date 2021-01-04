import {Validators} from '@angular/forms';
import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Gender} from '../../model/gender.enum';

export const userFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'firstName',
    label: 'First name',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'lastName',
    label: 'Last name',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'gender',
    label: 'Gender',
    validators: [Validators.required],
    type: 'select',
    selectOptions: [...Object.values(Gender).map(value => ({label: value, value}))],
    cols: 4,
    rows: 1
  },
  {
    inputName: 'phoneNumber',
    label: 'Phone number',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  }
];
