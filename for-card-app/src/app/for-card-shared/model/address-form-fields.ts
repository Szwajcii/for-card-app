import {Validators} from '@angular/forms';
import {FormGroupHelper} from './form-group-helper.model';
import {ValueLabel} from './value-label';


export const countries: ValueLabel[] = [
  {
    value: 'Poland',
    label: 'Poland'
  },
  {
    value: 'USA',
    label: 'USA'
  },
  {
    value: 'Germany',
    label: 'Germany'
  },
  {
    value: 'Netherlands',
    label: 'Netherlands'
  },
  {
    value: 'Norway',
    label: 'Norway'
  },
  {
    value: 'Sweden',
    label: 'Sweden'
  },
];

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
    selectOptions: countries,
    cols: 2,
    rows: 1
  }
];
