import {Validators} from '@angular/forms';
import {FormGroupHelper} from './form-group-helper.model';

export const addressFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'street',
    label: 'Street',
    validators: [Validators.required],
    type: 'text',
    cols: 2,
    rows: 1
  },
  {
    inputName: 'number',
    label: 'Number',
    validators: [Validators.required],
    type: 'text',
    cols: 2,
    rows: 1
  },
  {
    inputName: 'flat',
    label: 'Flat',
    validators: [Validators.required],
    type: 'text',
    cols: 2,
    rows: 1
  },
  {
    inputName: 'town',
    label: 'Town',
    validators: [Validators.required],
    type: 'text',
    cols: 2,
    rows: 1
  },
  {
    inputName: 'zipCode',
    label: 'Zip code',
    validators: [Validators.required],
    type: 'text',
    cols: 2,
    rows: 1
  },
  {
    inputName: 'country',
    label: 'Country',
    validators: [Validators.required],
    type: 'select',
    cols: 2,
    rows: 1
  }
];
