import {Validators} from '@angular/forms';
import {Gender} from '../../model/gender.enum';
import {FormGroupHelper} from '../../model/form-group-helper.model';

export const registrationFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'firstName',
    label: 'First name',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1,
    errors: [
      {
        message: 'Please provide first name!',
        validator: 'required'
      }
    ]
  },
  {
    inputName: 'lastName',
    label: 'Last name',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1,
    errors: [
      {
        message: 'Please provide last name!',
        validator: 'required'
      }
    ]
  },
  {
    inputName: 'gender',
    label: 'Gender',
    validators: [Validators.required],
    type: 'select',
    cols: 4,
    rows: 1,
    selectOptions: [...Object.values(Gender).map(value => ({label: value, value}))]
  },
  {
    inputName: 'email',
    label: 'Email',
    validators: [Validators.required, Validators.pattern('')],
    type: 'text',
    cols: 4,
    rows: 1,
    errors: [
      {
        message: 'Please provide e-mail address!',
        validator: 'required'
      },
      {
        message: 'Please enter valid e-mail!',
        validator: 'pattern'
      }
    ]
  },
  {
    inputName: 'phone',
    label: 'Phone number',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1,
  },
  {
    inputName: 'password',
    label: 'Password',
    validators: [Validators.required, Validators.minLength(6)],
    type: 'password',
    cols: 4,
    rows: 1,
    errors: [
      {
        message: 'Please provide password!',
        validator: 'required'
      }
    ]
  },
  {
    inputName: 'rePassword',
    label: 'Repeat password',
    validators: [Validators.required, Validators.minLength(6)],
    type: 'password',
    cols: 4,
    rows: 1,
    errors: [
      {
        message: 'Please repeat password',
        validator: 'required'
      }
    ]
  }
];
