export namespace PaymentCard {

  export interface Model {
    id: string;
    userId: string;
    paymentCardProvider: string;
    paymentCardNumber: string;
    paymentCardHolder: string;
    expiryDate: Date | string;
    cvvCode: string;
    cardActive: boolean;
    createdDate: Date | string;
    modifiedDate: Date | string;
  }

  export interface VerifyModel {
    id: string;
    cvvCode: string;
  }

  export type POST = Model;

  export type PUT = Model;

}
