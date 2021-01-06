import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {FormGroupHelperService} from '../../services/form-group-helper.service';
import {MessageService} from '../../services/message.service';
import {FormGroupHelper} from '../../model/form-group-helper.model';
import {addressFormFields} from '../../model/address-form-fields';
import {userFormFields} from './user-form-fields';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() userProfile: any;
  @Input() userProfileFormFields: FormGroupHelper.Model[];
  @Output() submitEvent = new EventEmitter();

  isDisabled = true;
  gridColumns = 4;

  generalForm: FormGroup;

  userProfileDetailsForm: FormGroup;
  userProfileDetailsFormControls: FormGroupHelper.ModelControl[];

  addressDetailsForm: FormGroup;
  addressDetailsFormControls: FormGroupHelper.ModelControl[];

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private formGroupService: FormGroupHelperService
  ) {
  }

  ngOnInit(): void {
    this.userProfileDetailsFormControls = this.formGroupService.addControlToModel(userFormFields);
    this.addressDetailsFormControls = this.formGroupService.addControlToModel(addressFormFields);

    this.userProfileDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.userProfileDetailsFormControls)
    });

    this.addressDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.addressDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      userProfileDetailsForm: this.userProfileDetailsForm,
      addressDetailsForm: this.addressDetailsForm
    });

    if (this.userProfile) {
      this.setFormValue(this.userProfile);
    }

    if (this.isDisabled) {
      this.generalForm.disable();
    }
  }

  setFormValue(userProfile: any) {
    this.userProfileDetailsFormControls
      .forEach(control => this.userProfileDetailsForm
        .get(control.inputName)
        .setValue(userProfile[control.inputName])
      );

    this.addressDetailsFormControls
      .forEach(control => this.addressDetailsForm
        .get(control.inputName)
        .setValue(userProfile[control.inputName])
      );
  }

  toggleEdit() {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      // this.setFormValue(this.userProfile);
      this.generalForm.disable();
    } else {
      this.generalForm.enable();
    }
  }

  onSubmit() {
    if (this.userProfileDetailsForm.invalid) {
      return;
    }
    this.submitEvent.emit({
      profileDetails: this.userProfileDetailsForm,
      addressDetails: this.addressDetailsForm
    });
  }
}
