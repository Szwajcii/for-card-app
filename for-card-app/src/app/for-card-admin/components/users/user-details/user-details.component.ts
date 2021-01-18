import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserManagementService} from '../../../../for-card-shared/resources/user-management.service';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {User} from '../../../../for-card-shared/model/user.model';
import {MessageService} from '../../../../for-card-shared/services/message.service';
import {UNEXPECTED_ERROR} from '../../../../for-card-shared/utils/messages';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User.Model;
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userManagementService: UserManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.findUserId()
      .pipe(
        mergeMap(id => this.userManagementService.findUserById(id)),
        map(user => {
          return user;
        })
      ).subscribe(user => {
      console.log(user);
      this.user = user;
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false;
      this.messageService.showMessage(UNEXPECTED_ERROR);
    });
  }

  findUserId(): Observable<string> {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }
}
