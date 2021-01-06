import {FormGroupHelper} from '../../model/form-group-helper.model';
import {Validators} from '@angular/forms';

export const resetPasswordFormFields: FormGroupHelper.Model[] = [
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
  }
];
