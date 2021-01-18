import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {paymentCardDetails} from './payment-card-fields';

@Component({
  selector: 'app-payment-card-details',
  templateUrl: './payment-card-details.component.html',
  styleUrls: ['./payment-card-details.component.scss']
})
export class PaymentCardDetailsComponent implements OnInit {

  paymentCard: any;
  paymentCardDetailsFields = paymentCardDetails;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PaymentCardDetailsComponent>
  ) { }

  ngOnInit(): void {
    this.paymentCard = this.data;
    console.log(this.paymentCard);
  }

  onClose() {
    this.dialogRef.close();
  }
}
