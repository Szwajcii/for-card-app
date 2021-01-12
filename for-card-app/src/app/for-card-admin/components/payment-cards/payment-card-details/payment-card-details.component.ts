import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-payment-card-details',
  templateUrl: './payment-card-details.component.html',
  styleUrls: ['./payment-card-details.component.scss']
})
export class PaymentCardDetailsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PaymentCardDetailsComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }
}
