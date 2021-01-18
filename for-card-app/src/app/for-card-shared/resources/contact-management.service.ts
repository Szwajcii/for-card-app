import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactMessage} from '../model/contact-message.model';
import {MessageResponse} from '../model/message-response.model';

@Injectable({
  providedIn: 'root'
})
export class ContactManagementService {

  private contactApi = 'api/contact';

  constructor(private http: HttpClient) {
  }

  findAllArchivedMessages() {
    return this.http.get<ContactMessage.Model[]>(`${this.contactApi}/all/unread`);
  }

  findAllUnreadMessages() {
    return this.http.get<ContactMessage.Model[]>(`${this.contactApi}/all/unread`);
  }

  sendMessage(contactMessage: ContactMessage.Model) {
    return this.http.post<MessageResponse>(`${this.contactApi}`, contactMessage);
  }

  markMessagesAsArchived(messageId: string) {
  }

  deleteMessages(messagesToDelete: string[]) {
  }

}
