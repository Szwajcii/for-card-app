import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {loginFormFields} from './login-form-fields';
import {MessageService} from '../../services/message.service';
import {FormGroupHelperService} from '../../services/form-group-helper.service';
import {AuthModel} from '../../model/auth-model';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {EMAIL_FORM_FIELD, PASSWORD_FORM_FIELD} from '../../utils/basic-properties';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  gridColumns = 4;
  generalForm: FormGroup;

  loginDetailsForm: FormGroup;
  loginDetailsFormControls = this.formGroupService.addControlToModel(loginFormFields);


  constructor(
    private dialogRef: MatDialogRef<AuthComponent>,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService
  ) {
  }

  ngOnInit(): void {
    this.loginDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.loginDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      loginDetailsForm: this.loginDetailsForm
    });
  }

  onSubmit() {
    const email = this.loginDetailsForm.get(EMAIL_FORM_FIELD).value;
    const password = this.loginDetailsForm.get(PASSWORD_FORM_FIELD).value;

    const authModel = new AuthModel(email, password);

    this.dialogRef.close(authModel);
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  openResetPasswordDialog() {
    this.dialog.open(ResetPasswordComponent);
  }

}
