import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessageService} from '../../services/message.service';
import {FormGroupHelperService} from '../../services/form-group-helper.service';
import {resetPasswordFormFields} from './reset-password-form-fields';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  gridColumns = 4;
  generalForm: FormGroup;

  resetPasswordForm: FormGroup;
  resetPasswordFormControls = this.formGroupService.addControlToModel(resetPasswordFormFields);


  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private dialogRef: MatDialogRef<ResetPasswordComponent>
  ) {
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.resetPasswordFormControls)
    });

    this.generalForm = this.formBuilder.group({
      resetPasswordForm: this.resetPasswordForm
    });
  }

  onSubmit() {

  }

  onCancel() {
    this.dialogRef.close();
  }

}
