import {Component, OnInit} from '@angular/core';
import {ContactManagementService} from "../../../../for-card-shared/resources/contact-management.service";
import {ContactMessage} from '../../../../for-card-shared/model/contact-message.model';

@Component({
  selector: 'app-archived-messages',
  templateUrl: './archived-messages.component.html',
  styleUrls: ['./archived-messages.component.scss']
})
export class ArchivedMessagesComponent implements OnInit {

  archivedMessages: ContactMessage.Model[];
  isLoading = false;

  constructor(
    private contactMessagesService: ContactManagementService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.contactMessagesService.findAllArchivedMessages()
      .subscribe(resData => {
        console.log(resData);
        this.archivedMessages = resData;
      }, error => {
        console.log(error);
      });
  }
}
