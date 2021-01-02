import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import {DATE_FORMAT, DATE_TIME_FORMAT, MONTH_YEAR_FORMAT} from '../utils/date-formatter';

@Pipe({name: 'DatePipe'})
export class DatePipe implements PipeTransform {
  transform(dateString: string): string {
    return moment(dateString).utc(true).format(DATE_FORMAT);
  }
}

@Pipe({name: 'DateTimePipe'})
export class DateTimePipe implements PipeTransform {
  transform(dateString: string): string {
    return moment(dateString).utc(true).format(DATE_TIME_FORMAT);
  }
}

@Pipe({name: 'PaymentCardDatePipe'})
export class PaymentCardDatePipe implements PipeTransform {
  transform(dateString: string): string {
    return moment(dateString).utc(true).format(MONTH_YEAR_FORMAT);
  }
}
