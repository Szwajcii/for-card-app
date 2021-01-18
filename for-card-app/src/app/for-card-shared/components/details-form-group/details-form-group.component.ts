import {Component, Input, OnInit} from '@angular/core';
import {DetailsFormHelper} from '../../model/details-form-helper.model';

@Component({
  selector: 'app-details-form-group',
  templateUrl: './details-form-group.component.html',
  styleUrls: ['./details-form-group.component.scss']
})
export class DetailsFormGroupComponent implements OnInit {

  @Input() detailsFieldsModel: DetailsFormHelper.Model[];
  @Input() detailsModel: any;
  @Input() sectionName: string;

  constructor() {
  }

  ngOnInit(): void {
    this.setDetails(this.detailsModel);
  }

  setDetails(model: any) {
    this.detailsFieldsModel.forEach(detail => {
      detail.value = model[detail.inputName];
    });
  }
}
