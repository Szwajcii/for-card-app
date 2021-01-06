import {Gender} from './gender.enum';

export namespace Registration {

  export interface Model {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    rePassword: string;
    gender: Gender;
    phone: string;
  }

  export type POST = Model;
}
