import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentCardManagementService {

  private paymentCardApi = 'api/payment-card';

  constructor(private http: HttpClient) {
  }

}
