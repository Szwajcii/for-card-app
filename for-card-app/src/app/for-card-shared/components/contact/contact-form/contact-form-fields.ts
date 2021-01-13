import {FormGroupHelper} from '../../../model/form-group-helper.model';
import {Validators} from '@angular/forms';

export const contactFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'name',
    label: 'Name',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'email',
    label: 'Email',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'message',
    label: 'Message',
    validators: [Validators.required],
    type: 'textarea',
    cols: 4,
    rows: 1
  }
];
