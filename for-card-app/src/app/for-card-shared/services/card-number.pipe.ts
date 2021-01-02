import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'CardNumberPipe'})
export class CardNumberPipe implements PipeTransform {
  transform(cardNumber: string): string {
    const hiddenCardNumber = '**** **** **** ';
    const lastFourDigits = cardNumber.slice(cardNumber.length - 4);
    return hiddenCardNumber + lastFourDigits;
  }
}
