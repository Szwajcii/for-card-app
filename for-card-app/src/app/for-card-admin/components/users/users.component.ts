import {Component, OnInit} from '@angular/core';
import {UserManagementService} from '../../../for-card-shared/resources/user-management.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public displayedColumns: Array<string> = [
    'name',
    'cards',
    'createdAt',
    'modifiedAt',
    'country'
  ];

  constructor(
    private userManagementService: UserManagementService
  ) {
  }

  ngOnInit(): void {
  }

}
