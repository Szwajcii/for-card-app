import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) {
  }

  showMessage(message: string, timeout: number = 4000) {
    this.snackBar.open(message, 'close', {
      duration: timeout,
      horizontalPosition: 'left',
      verticalPosition: 'top'
    });
  }

}
