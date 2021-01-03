import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PaymentCardManagementService} from '../../resources/payment-card.management.service';
import {MessageService} from '../../services/message.service';
import {User} from '../../model/user.model';
import {PaymentCard} from '../../model/payment-card.model';
import {PaymentCardFormComponent} from './payment-card-form/payment-card-form.component';
import {FormAction} from '../../model/form-action.model';
import {UNEXPECTED_ERROR} from '../../utils/error-messages';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  private DIALOG_WIDTH = '400px';

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
    this.fetchUserPaymentCards();
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
      width: this.DIALOG_WIDTH,
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
      width: this.DIALOG_WIDTH,
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
