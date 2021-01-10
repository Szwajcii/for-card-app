import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
import {UserManagementService} from '../../resources/user-management.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';
import {UNEXPECTED_ERROR} from '../../utils/messages';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-payment-card-dashboard',
  templateUrl: './payment-card-dashboard.component.html',
  styleUrls: ['./payment-card-dashboard.component.scss']
})
export class PaymentCardDashboardComponent implements OnInit {

  user: User.Model;
  isLoading = true;

  constructor(
    private userManagementService: UserManagementService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.findUserIdFromContext()
      .pipe(
        mergeMap(id => this.userManagementService.findUserById(id)),
        map(model => {
          console.log(200, model);
          return model;
        })
      ).subscribe(userModel => {
      this.user = userModel;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.log(error);
      this.messageService.showMessage(UNEXPECTED_ERROR);
    });
  }

  findUserIdFromContext(): Observable<string> {
    if (this.userManagementService.getUserContext() != null) {
      return this.userManagementService.getUserContext().pipe(
        filter(userContext => !!userContext),
        map(userContext => userContext.id));
    }
    return this.activatedRoute.params.pipe(map(params => params.id));
  }
}
