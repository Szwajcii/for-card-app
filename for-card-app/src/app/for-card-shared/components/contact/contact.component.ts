import {Component, OnInit} from '@angular/core';
import {ContactManagementService} from '../../resources/contact-management.service';
import {MessageService} from '../../services/message.service';
import {UNEXPECTED_ERROR} from '../../utils/messages';
import {AuthService} from '../auth/auth.service';
import {ContactMessage} from '../../model/contact-message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userId: string;

  constructor(
    private authService: AuthService,
    private contactManagementService: ContactManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.authService.getUserContext().subscribe(user => {
      if (user) {
        this.userId = user.id;
      }
    }, error => {
      console.log(error);
      this.messageService.showMessage(UNEXPECTED_ERROR);
    });
  }

  sendMessage($event) {
    const message: ContactMessage.Model = $event;

    message.userId = this.userId;
    this.contactManagementService.sendMessage(message)
      .subscribe(resData => {
        this.messageService.showMessage(resData.message);
      }, error => {
        console.log(error);
        this.messageService.showMessage(UNEXPECTED_ERROR);
      });
  }

}
