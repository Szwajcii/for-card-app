import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../for-card-shared/components/auth/auth.service';
import {Subscription} from 'rxjs';
import {Role} from '../for-card-shared/model/role.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  ForCardAdmin = Role.ADMIN;
  ForCardUser = Role.USER;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.userSub = this.authService.userContext.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

}
