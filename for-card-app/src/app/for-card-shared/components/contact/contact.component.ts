import {Component, OnInit} from '@angular/core';
import {ContactManagementService} from '../../resources/contact-management.service';
import {MessageService} from '../../services/message.service';
import {UNEXPECTED_ERROR} from '../../utils/messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private contactManagementService: ContactManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
  }

  sendMessage($event) {
    this.contactManagementService.sendMessage($event)
      .subscribe(resData => {
        this.messageService.showMessage(resData.message);
      }, error => {
        console.log(error);
        this.messageService.showMessage(UNEXPECTED_ERROR);
      });
  }

}
