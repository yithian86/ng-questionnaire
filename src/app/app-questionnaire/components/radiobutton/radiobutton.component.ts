import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppAbstractFieldComponent } from "../abstact-field/abstract-field.component";
import { AppQuestionnaireTypings as WidgetTypings } from '../../model/app-questionnaire.interfaces';
import { FIELD_TYPE } from '../../model/app-questionnaire.constants';

@Component({
  selector: 'app-radiobutton',
  templateUrl: 'radiobutton.pug',
  styleUrls: ['radiobutton.scss']
})
export class RadiobuttonComponent extends AppAbstractFieldComponent implements WidgetTypings.IField, OnInit {
  override config: WidgetTypings.IQuestion;
  override group: FormGroup;
  isDisabled: boolean;

  constructor() {
    super();
  }

  override ngOnInit(){
    super.ngOnInit();
  }

  get FIELD_TYPE() {
    return FIELD_TYPE;
  }

  getRadiobuttonId(index: number): string {
    return `${this.config.id}${index}`;
  }

  setSelectedOption = (option: WidgetTypings.IOption): void => {
    this.currentControl?.setValue(option.optionId);
    this.currentControl.markAsDirty();
    this.currentControl.markAsTouched();
  }

  isSelectedOption = (option: WidgetTypings.IOption): boolean => {
    return option.optionId === this.group.get(this.config.id)?.value;
  }
}
