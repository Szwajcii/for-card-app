import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PaymentCardManagementService} from '../../resources/payment-card.management.service';
import {MessageService} from '../../services/message.service';
import {User} from '../../model/user.model';
import {PaymentCard} from '../../model/payment-card.model';
import {PaymentCardFormComponent} from './payment-card-form/payment-card-form.component';
import {FormAction} from '../../model/form-action.model';
import {UNEXPECTED_ERROR} from '../../utils/error-messages';
import {DIALOG_WIDTH} from '../../utils/basic-properties';

// todo: Just for testing purposes
export const TEST_DATA: PaymentCard.Model[] = [
  {
    id: '5fcfb8aad87b3f3acbc10287',
    userId: '5fb22a6bf69844622fd4bfc7',
    cardActive: false,
    createdDate: '2020-12-08T18:32:26.426',
    cvvCode: '333',
    expiryDate: '2022-10-12',
    modifiedDate: '2020-12-09T08:52:14.01',
    paymentCardHolder: 'Card one',
    paymentCardNumber: '9876543298765444',
    paymentCardProvider: 'Visa'
  },
  {
    id: '5fcfbdd1d87b3f3acbc10288',
    userId: '5fb22a6bf69844622fd4bfc7',
    cardActive: true,
    createdDate: '2020-12-08T18:54:25.129',
    cvvCode: '111',
    expiryDate: '2020-12-30',
    modifiedDate: '2020-12-14T14:03:45.095',
    paymentCardHolder: 'Ford aaa',
    paymentCardNumber: '1111222233334455',
    paymentCardProvider: 'MasterCard'
  }
];


@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  user: User.Model;
  userPaymentCards: PaymentCard.Model[];
  userName: string;

  constructor(
    private dialog: MatDialog,
    private paymentCardService: PaymentCardManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    // this.fetchUserPaymentCards();
    // todo: Just for testing
    this.userPaymentCards = TEST_DATA;
  }

  fetchUserPaymentCards() {
    this.paymentCardService.findAllUserPaymentCards(this.user.id)
      .subscribe(resData => {
        console.log(resData);
        this.userPaymentCards = resData;
      }, error => {
        console.log(error);
      });
  }

  viewPaymentCardDetails(cardIndex: number, $event: any) {
    $event.preventDefault();
    $event.stopPropagation();
    const dialogRef = this.dialog.open(PaymentCardFormComponent, {
      width: DIALOG_WIDTH,
      data: {
        card: this.userPaymentCards[cardIndex],
        isDisabled: true,
        formAction: FormAction.EDIT
      }
    });

    dialogRef.afterClosed().subscribe(response => {
        if (response) {
          this.fetchUserPaymentCards();
        }
      }, error => {
        console.log(error);
      }
    );
  }

  activatePaymentCard(card: PaymentCard.Model) {
    if (!card.cardActive) {
      this.paymentCardService.activateCard(card.id).subscribe(resData => {
        this.messageService.showMessage('Card activated!');
        this.fetchUserPaymentCards();
      }, error => {
        console.log(error);
        this.messageService.showMessage(UNEXPECTED_ERROR);
      });
    }
  }

  addNewPaymentCard() {
    const dialogRef = this.dialog.open(PaymentCardFormComponent, {
      width: DIALOG_WIDTH,
      data: {
        paymentCardHolder: this.userName
      }
    });

    dialogRef.afterClosed().subscribe(response => {
        if (response) {
          this.fetchUserPaymentCards();
        }
      }, error => {
        console.log(error);
      }
    );
  }

  deletePaymentCard() {
  }

}
