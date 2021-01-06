import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessageService} from '../../services/message.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserContext} from '../../model/user-context.model';
import {Registration} from '../../model/registration.model';
import {MessageResponse} from '../../model/message-response.model';
import {AuthModel} from '../../model/auth-model';
import {JwtTokenResponse} from '../../model/jwt-token-response.model';
import {tap} from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static USER_CONTEXT = 'app.userContext';
  private static AUTH_API = 'api/auth';
  private static ONE_MINUTE_MILLISECONDS = 60000;
  private refreshTokenTimer: any;
  private tokenExpirationDuration: any;
  isAuthenticated = false;
  userContext = new BehaviorSubject<UserContext>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  getUserContext(): Observable<UserContext> {
    return this.userContext;
  }

  signUp(model: Registration.Model) {
    return this.http.post<MessageResponse>(`${AuthService.AUTH_API}/signup`, model);
  }

  login(model: AuthModel) {
    return this.http.post<JwtTokenResponse>(`${AuthService.AUTH_API}/signin`, model)
      .pipe(tap(resData => {
        this.handleAuthentication(resData.jwtToken);
      }));
  }

  autoLogin() {
    const userData: UserContext = JSON.parse(localStorage.getItem(AuthService.USER_CONTEXT));
    if (!userData) {
      return;
    }

    this.userContext.next(userData);

    // After autoLogin check if token is still active
    this.tokenExpirationDuration = new Date(+userData.exp * 1000).getTime() - new Date().getTime();
    const isTokenActive = this.tokenExpirationDuration > AuthService.ONE_MINUTE_MILLISECONDS;

    if (this.tokenExpirationDuration < 0) {
      this.logout();
    } else if (isTokenActive) {
      this.isAuthenticated = true;
      this.clearRefreshTokenTimer();
      this.autoRefreshToken(this.tokenExpirationDuration - AuthService.ONE_MINUTE_MILLISECONDS);
    } else {
      this.isAuthenticated = true;
      this.refreshToken();
    }
  }

  logout() {
    this.http.get<MessageResponse>(`${AuthService.AUTH_API}/logout`).subscribe(resData => {
      this.messageService.showMessage(resData.message);
      this.userContext.next(null);
      this.isAuthenticated = false;
      localStorage.removeItem(AuthService.USER_CONTEXT);
      this.clearRefreshTokenTimer();
    }, error => {
      console.log(error);
    });
  }

  autoLogout(expirationDuration: number) {
    this.refreshTokenTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(token: string) {
    const decodedToken: string = JSON.stringify(jwt_decode(token));
    const userContext: UserContext = {
      ...JSON.parse(decodedToken)
    };
    userContext.token = token;
    this.tokenExpirationDuration = new Date(+userContext.exp * 1000).getTime() - new Date().getTime();
    // Refresh token one minute before token will expire
    this.clearRefreshTokenTimer();
    this.autoRefreshToken(this.tokenExpirationDuration - AuthService.ONE_MINUTE_MILLISECONDS);

    // Clear current user when this method is called from refreshToken method - this will prevent user duplication
    if (this.userContext.getValue() !== null) {
      this.userContext.next(null);
    }

    this.userContext.next(userContext);
    localStorage.setItem(AuthService.USER_CONTEXT, JSON.stringify(userContext));
    this.isAuthenticated = true;
  }

  private refreshToken() {
    this.http.get<JwtTokenResponse>(`${AuthService.AUTH_API}/refresh-token`)
      .subscribe(resData => {
        this.handleAuthentication(resData.jwtToken);
      }, error => {
        console.log(error);
        this.logout();
      });
  }

  private autoRefreshToken(refreshDuration: number) {
    this.refreshTokenTimer = setTimeout(() => {
      this.refreshToken();
    }, refreshDuration);
  }

  private clearRefreshTokenTimer() {
    if (this.refreshTokenTimer) {
      clearTimeout(this.refreshTokenTimer);
    }
    this.refreshTokenTimer = null;
  }

  private handleError() {

  }
}
