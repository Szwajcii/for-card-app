import {Component, OnInit} from '@angular/core';
import {UserManagementService} from '../../../for-card-shared/resources/user-management.service';
import {User} from '../../../for-card-shared/model/user.model';
import {MessageService} from '../../../for-card-shared/services/message.service';
import {CONNECTION_PROBLEM} from '../../../for-card-shared/utils/messages';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User.DataModel[];
  loading = true;
  noRecords = false;

  public displayedColumns: Array<string> = [
    'name',
    'gender',
    'cards',
    'createdAt',
    'modifiedAt',
    'country'
  ];

  constructor(
    private userManagementService: UserManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.userManagementService.findAllUsers()
      .subscribe(resData => {
        console.log(resData);
        this.loading = false;
        this.users = resData;
        this.noRecords = this.users.length === 0;
      }, error => {
        console.log(error);
        this.loading = false;
        this.messageService.showMessage(CONNECTION_PROBLEM);
      });
  }

}
