import {Address} from './address.model';
import {Gender} from './gender.enum';
import {Role} from './role.model';

export namespace User {

  export interface Model {
    id: string;
    roles: Role[];
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    address: Address;
    gender: Gender;
    createdAt: Date | string;
  }

}
