import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PaymentCardManagementService} from '../../../resources/payment-card.management.service';
import {User} from '../../../model/user.model';
import {PaymentCard} from '../../../model/payment-card.model';
import {PaymentCardFormComponent} from './payment-card-form/payment-card-form.component';
import {FormAction} from '../../../model/form-action.model';
import {DIALOG_WIDTH} from '../../../utils/basic-properties';


@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  @Input() user: User.Model;
  userPaymentCards: PaymentCard.Model[];
  userName: string;
  userId: string;
  isCardSelected = false;
  selectedCard: PaymentCard.Model;

  constructor(
    private dialog: MatDialog,
    private paymentCardService: PaymentCardManagementService,
  ) {
  }

  ngOnInit(): void {
    this.fetchUserPaymentCards(this.user.id);
    this.userName = this.combineUserName(this.user);
  }

  fetchUserPaymentCards(userId: string) {
    this.paymentCardService.findAllUserPaymentCards(userId)
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
          this.fetchUserPaymentCards(this.user.id);
        }
      }, error => {
        console.log(error);
      }
    );
  }

  selectPaymentCard(card: PaymentCard.Model) {
    if (card === this.selectedCard) {
      this.isCardSelected = false;
      this.selectedCard = null;
    } else {
      this.selectedCard = card;
      this.isCardSelected = true;
    }
    console.log(this.selectedCard);
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
          this.fetchUserPaymentCards(this.user.id);
        }
      }, error => {
        console.log(error);
      }
    );
  }

  deletePaymentCard() {
  }

  private combineUserName(user: User.Model) {
    const stringArray = [];

    if (user.firstName) {
      stringArray.push(user.firstName);
    }

    if (user.lastName) {
      stringArray.push(user.lastName);
    }

    return stringArray.join(' ').trim();
  }
}
