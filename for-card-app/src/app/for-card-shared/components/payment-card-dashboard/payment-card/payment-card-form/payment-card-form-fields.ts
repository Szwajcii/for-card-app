import {FormGroupHelper} from '../../../../model/form-group-helper.model';
import {Validators} from '@angular/forms';

export const paymentCardFormFields: FormGroupHelper.Model[] = [
  {
    inputName: 'paymentCardProvider',
    label: 'Payment card provider',
    validators: [Validators.required],
    type: 'select',
    selectOptions: [{label: 'Visa', value: 'Visa'}, {label: 'MasterCard', value: 'MasterCard'}],
    cols: 4,
    rows: 1
  },
  {
    inputName: 'paymentCardNumber',
    label: 'Payment card number',
    validators: [Validators.required, Validators.min(16)],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'paymentCardHolder',
    label: 'Payment card holder',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'expiryDate',
    label: 'Expiry date',
    validators: [Validators.required],
    type: 'date',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'cvvCode',
    label: 'CVV code',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  },
  {
    inputName: 'cardActive',
    label: 'Set payment card as active',
    validators: [Validators.required],
    type: 'checkbox',
    cols: 3,
    rows: 1
  }
];
