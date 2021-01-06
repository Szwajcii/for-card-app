export class AuthModel {
  email: string;
  password: string;
  returnSecureToken: boolean;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.returnSecureToken = true;
  }

}
