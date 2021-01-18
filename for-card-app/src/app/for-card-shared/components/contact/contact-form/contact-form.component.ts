import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {FormGroupHelper} from '../../../model/form-group-helper.model';
import {contactFormFields} from './contact-form-fields';
import {ContactMessage} from '../../../model/contact-message.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Input() message: any;
  @Input() isDisabled = false;
  @Output() submitEvent = new EventEmitter();

  gridColumns = 4;

  generalForm: FormGroup;

  contactForm: FormGroup;
  contactFormControls: FormGroupHelper.ModelControl[];

  constructor(
    private formBuilder: FormBuilder,
    private formGroupService: FormGroupHelperService,
  ) {
  }

  ngOnInit(): void {
    this.contactFormControls = this.formGroupService.addControlToModel(contactFormFields);

    this.contactForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.contactFormControls)
    });

    this.generalForm = this.formBuilder.group({
      contactForm: this.contactForm
    });

    if (this.message) {
      this.setFormValue(this.message);
    }

    if (this.isDisabled) {
      this.generalForm.disable();
    }
  }

  setFormValue(userProfile: any) {
    this.contactFormControls
      .forEach(control => this.contactForm
        .get(control.inputName)
        .setValue(userProfile[control.inputName])
      );
  }

  onSubmit() {
    const contactModel: ContactMessage.Model = {
      ...this.contactForm.value
    };
    console.log(contactModel);
    this.submitEvent.emit(contactModel);
    this.generalForm.reset();
  }
}
