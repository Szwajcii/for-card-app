import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {RegistrationComponent} from '../registration/registration.component';
import {AuthComponent} from '../auth/auth.component';
import {DIALOG_WIDTH} from '../../utils/basic-properties';
import {AuthModel} from '../../model/auth-model';
import {JwtTokenResponse} from '../../model/jwt-token-response.model';
import {Observable} from 'rxjs';
import {Registration} from '../../model/registration.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;
  isLoading = false;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated;
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: DIALOG_WIDTH
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.loginUser(data);
      }
    });
  }

  loginUser(authModel: AuthModel) {
    this.isLoading = true;

    let authAction: Observable<JwtTokenResponse>;
    authAction = this.authService.login(authModel);

    authAction.subscribe(resData => {
      this.isLoading = false;
      this.isLoggedIn = true;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });

  }

  openRegistrationDialog() {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: DIALOG_WIDTH
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        console.log(data);
        this.registerUser(data);
      }
    }, error => {
      console.log(error);
    });
  }

  registerUser(model: Registration.Model) {

    const registrationAction = this.authService.signUp(model);

    registrationAction.subscribe(resData => {
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });

  }

}
