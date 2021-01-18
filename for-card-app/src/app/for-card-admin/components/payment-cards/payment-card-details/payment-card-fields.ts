import {DetailsFormHelper} from '../../../../for-card-shared/model/details-form-helper.model';

export const paymentCardDetails: DetailsFormHelper.Model[] = [
  {
    inputName: 'paymentCardHolder',
    label: 'Card holder',
  },
  {
    inputName: 'paymentCardNumber',
    label: 'Card number',
    type: 'cardNumber'
  },
  {
    inputName: 'expiryDate',
    label: 'Expiry date'
  }
];
