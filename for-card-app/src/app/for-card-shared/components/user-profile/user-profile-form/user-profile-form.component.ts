import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroupHelper} from '../../../model/form-group-helper.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessageService} from '../../../services/message.service';
import {Router} from '@angular/router';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {userFormFields} from '../user-form-fields';
import {addressFormFields} from '../../../model/address-form-fields';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {

  @Input() userProfile: any;
  @Input() userProfileFormFields: FormGroupHelper.Model[];
  @Input() isDisabled = true;
  @Input() adminView = false;
  @Output() submitEvent = new EventEmitter();
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

    // Address is nested object in userProfile
    this.addressDetailsFormControls
      .forEach(control => this.addressDetailsForm
        .get(control.inputName)
        .setValue(userProfile.address[control.inputName])
      );
  }

  toggleEdit() {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      this.setFormValue(this.userProfile);
      this.generalForm.disable();
    } else {
      this.generalForm.enable();
    }
  }

  onSubmit() {
    this.submitEvent.emit({
      userId: this.userProfile.id,
      userCode: this.userProfile.code,
      userEmail: this.userProfile.email,
      profileDetails: this.userProfileDetailsForm,
      addressDetails: this.addressDetailsForm
    });
    this.toggleEdit();
  }

  goBack() {
    this.router.navigate(['/users']);
  }

}
