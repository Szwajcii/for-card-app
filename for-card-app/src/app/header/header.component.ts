import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../for-card-shared/components/auth/auth.service';
import {Subscription} from 'rxjs';
import {Role} from '../for-card-shared/model/role.model';
import {Router} from '@angular/router';

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
    public router: Router
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

  openMenu() {
    const menu = document.getElementById('menuLinks');
    menu.classList.toggle('hidden');
  }

}
