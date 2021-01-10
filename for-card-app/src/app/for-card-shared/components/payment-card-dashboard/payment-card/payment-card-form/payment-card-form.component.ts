import {Component, Inject, EventEmitter, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PaymentCardManagementService} from '../../../../resources/payment-card.management.service';
import {FormGroupHelperService} from '../../../../services/form-group-helper.service';
import {MessageService} from '../../../../services/message.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {paymentCardFormFields} from './payment-card-form-fields';
import {PaymentCard} from '../../../../model/payment-card.model';

@Component({
  selector: 'app-payment-card-form',
  templateUrl: './payment-card-form.component.html',
  styleUrls: ['./payment-card-form.component.scss']
})
export class PaymentCardFormComponent implements OnInit {

  @Output() closeDialog = new EventEmitter();
  private PAYMENT_CARD_HOLDER = 'paymentCardHolder';

  isDisabled: boolean;
  paymentCard: PaymentCard.Model;
  paymentCardHolder: string;
  formAction;
  editCard = false;

  gridColumns = 4;
  generalForm: FormGroup;

  paymentCardDetailsForm: FormGroup;
  paymentCardDetailsFormControls = this.formGroupService.addControlToModel(paymentCardFormFields);

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PaymentCardFormComponent>,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private paymentCardService: PaymentCardManagementService
  ) {
  }

  ngOnInit(): void {
    if (this.data.card) {
      this.paymentCard = this.data.card;
      this.isDisabled = this.data.isDisabled;
      this.formAction = this.data.formAction;
      this.editCard = true;
    }

    if (this.data.paymentCardHolder) {
      this.paymentCardHolder = this.data.paymentCardHolder;
    }

    this.paymentCardDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.paymentCardDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      paymentCardDetailsForm: this.paymentCardDetailsForm
    });

    this.paymentCardDetailsForm.get(this.PAYMENT_CARD_HOLDER).setValue(this.paymentCardHolder);

    if (this.paymentCard) {
      this.setFormValue(this.paymentCard);
    }

    if (this.isDisabled) {
      this.generalForm.disable();
    }
  }

  setFormValue(paymentCard: PaymentCard.Model) {
    this.paymentCardDetailsFormControls
      .forEach(control => this.paymentCardDetailsForm
        .get(control.inputName)
        .setValue(paymentCard[control.inputName])
      );
  }

  toggleEdit() {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      this.setFormValue(this.paymentCard);
      this.generalForm.disable();
    } else {
      this.generalForm.enable();
    }
  }

  onSubmit() {
    const paymentCard: PaymentCard.Model = {
      ...this.paymentCardDetailsForm.value
    };

    this.createOrUpdate(paymentCard);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  createOrUpdate(paymentCard: PaymentCard.Model) {
    let action;

    if (this.editCard) {
      paymentCard.id = this.paymentCard.id;
      paymentCard.userId = this.paymentCard.userId;
      paymentCard.createdDate = this.paymentCard.createdDate;
      paymentCard.modifiedDate = this.paymentCard.modifiedDate;
      action = this.paymentCardService.update(paymentCard);
    } else {
      action = this.paymentCardService.create(paymentCard);
    }

    action.subscribe(data => {
      this.messageService.showMessage('Added new payment card!');
      this.dialogRef.close(true);
    }, error => {
      this.messageService.showMessage('Adding new payment card failed!');
      console.log(error);
      this.dialogRef.close(false);
    });

  }
}
