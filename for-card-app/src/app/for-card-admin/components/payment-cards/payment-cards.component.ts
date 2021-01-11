import {Component, OnInit} from '@angular/core';
import {PaymentCardManagementService} from '../../../for-card-shared/resources/payment-card.management.service';

@Component({
  selector: 'app-payment-cards',
  templateUrl: './payment-cards.component.html',
  styleUrls: ['./payment-cards.component.scss']
})
export class PaymentCardsComponent implements OnInit {

  public displayedColumns: Array<string> = [
    'code',
    'cardProvider',
    'cardHolder',
    'cardNumber',
    'cardExpiryDate'
  ];

  constructor(
    private paymentCardService: PaymentCardManagementService
  ) {
  }

  ngOnInit(): void {
  }

}
