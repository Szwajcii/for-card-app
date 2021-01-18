import {Component, OnInit} from '@angular/core';
import {ContactMessage} from '../../../for-card-shared/model/contact-message.model';
import {ContactManagementService} from '../../../for-card-shared/resources/contact-management.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  newMessages: ContactMessage.Model[];
  isLoading = false;

  constructor(
    private contactMessagesService: ContactManagementService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.contactMessagesService.findAllUnreadMessages()
      .subscribe(resData => {
        console.log(resData);
        this.newMessages = resData;
      }, error => {
        console.log(error);
      });
  }

}
