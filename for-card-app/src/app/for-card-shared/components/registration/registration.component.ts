import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {MessageService} from '../../services/message.service';
import {FormGroupHelperService} from '../../services/form-group-helper.service';
import {registrationFormFields} from './registration-form-fields';
import {Registration} from '../../model/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  gridColumns = 4;
  generalForm: FormGroup;

  registrationDetailsForm: FormGroup;
  registrationDetailsFormControls = this.formGroupService.addControlToModel(registrationFormFields);

  constructor(
    private dialogRef: MatDialogRef<RegistrationComponent>,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService
  ) {
  }

  ngOnInit(): void {
    this.registrationDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.registrationDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      registrationDetailsForm: this.registrationDetailsForm
    });
  }

  onSubmit() {
    const registrationModel: Registration.Model = {
      ...this.registrationDetailsForm.value
    };

    this.dialogRef.close(registrationModel);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
