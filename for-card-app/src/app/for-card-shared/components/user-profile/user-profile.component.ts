import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../services/message.service';
import {User} from '../../model/user.model';
import {UserManagementService} from '../../resources/user-management.service';
import {Observable} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';
import {SUCCESSFULLY_UPDATED, UNEXPECTED_ERROR, UPDATE_HAS_FAILED} from '../../utils/messages';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  isLoading = true;
  userProfile: User.Model;
  userId: string;
  @Input() submitEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private userManagementService: UserManagementService
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
      this.userProfile = userModel;
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

  onSubmit($event) {
    this.isLoading = true;
    const userModel: User.Model = {
      ...$event.profileDetails.value
    };

    userModel.address = $event.addressDetails.value;
    userModel.id = $event.userId;
    userModel.code = $event.userCode;
    userModel.email = $event.userEmail;

    this.userManagementService.update(userModel)
      .subscribe(resData => {
        this.isLoading = false;
        console.log(resData);
        this.messageService.showMessage(SUCCESSFULLY_UPDATED);
      }, error => {
        this.isLoading = false;
        console.log(error);
        this.messageService.showMessage(UPDATE_HAS_FAILED);
      });

  }
}
