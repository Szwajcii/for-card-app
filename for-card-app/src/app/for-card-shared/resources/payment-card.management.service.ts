import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaymentCard} from '../model/payment-card.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentCardManagementService {

  private paymentCardApi = 'api/payment-card';

  constructor(private http: HttpClient) {
  }

  findAllPaymentCards(): Observable<PaymentCard.Model[]> {
    return this.http.get<PaymentCard.Model[]>(`${this.paymentCardApi}/all`);
  }

  findAllUserPaymentCards(userId: string): Observable<PaymentCard.Model[]> {
    return this.http.get<PaymentCard.Model[]>(`${this.paymentCardApi}/all-payment-cards/${userId}`);
  }

  activateCard(paymentCardId: string): Observable<PaymentCard.Model> {
    return this.http.post<PaymentCard.Model>(`${this.paymentCardApi}/activate-card/${paymentCardId}`, {});
  }

  create(paymentCard: PaymentCard.POST): Observable<PaymentCard.Model> {
    return this.http.post<PaymentCard.Model>(`${this.paymentCardApi}`, paymentCard);
  }

  update(paymentCard: PaymentCard.PUT): Observable<PaymentCard.Model> {
    return this.http.put<PaymentCard.Model>(`${this.paymentCardApi}`, paymentCard);
  }

  verifyPaymentCard(verifyModel: PaymentCard.VerifyModel) {
    return this.http.post<boolean>(`${this.paymentCardApi}/verify-payment-card`, verifyModel);
  }

  deletePaymentCard(paymentCardId: string) {
    return this.http.delete(`${this.paymentCardApi}/delete/${paymentCardId}`);
  }
}
