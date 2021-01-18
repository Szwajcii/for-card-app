import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'CardNumberPipe'})
export class CardNumberPipe implements PipeTransform {
  transform(cardNumber: string): string {
    const hiddenCardNumber = '**** **** **** ';
    const lastFourDigits = cardNumber.slice(cardNumber.length - 4);
    return hiddenCardNumber + lastFourDigits;
  }
}

@Pipe({name: 'FormatCardNumberPipe'})
export class FormatCardNumberPipe implements PipeTransform {
  transform(cardNumber: string): string {
    const formattedCardNumber = [];
    const step = 4;

    for (let i = 0; i < cardNumber.length; i += step) {
      formattedCardNumber.push(cardNumber.substr(i, step));
    }

    return formattedCardNumber.join(' - ');
  }
}
