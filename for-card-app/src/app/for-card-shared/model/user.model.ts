import {Address} from './address.model';
import {Gender} from './gender.enum';

export namespace User {

  export interface Model {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    address: Address;
    gender: Gender;
    createdAt: Date | string;
  }

}
