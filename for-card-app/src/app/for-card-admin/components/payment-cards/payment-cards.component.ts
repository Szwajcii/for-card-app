import {Component, OnInit} from '@angular/core';
import {PaymentCardManagementService} from '../../../for-card-shared/resources/payment-card.management.service';
import {PaymentCard} from '../../../for-card-shared/model/payment-card.model';
import {MessageService} from '../../../for-card-shared/services/message.service';
import {CONNECTION_PROBLEM} from '../../../for-card-shared/utils/messages';

@Component({
  selector: 'app-payment-cards',
  templateUrl: './payment-cards.component.html',
  styleUrls: ['./payment-cards.component.scss']
})
export class PaymentCardsComponent implements OnInit {

  paymentCards: PaymentCard.Model[];
  loading = true;
  noRecords = false;

  public displayedColumns: Array<string> = [
    'code',
    'cardProvider',
    'cardHolder',
    'cardNumber',
    'cardExpiryDate'
  ];

  constructor(
    private paymentCardService: PaymentCardManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.paymentCardService.findAllPaymentCards()
      .subscribe(resData => {
        this.loading = false;
        this.paymentCards = resData;
        this.noRecords = this.paymentCards.length === 0;
      }, error => {
        console.log(error);
        this.loading = false;
        this.messageService.showMessage(CONNECTION_PROBLEM);
      });
  }

}
