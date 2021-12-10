import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppQuestionnaireTypings as WidgetTypings } from '../../model/app-questionnaire.interfaces';
import { AppAbstractFieldComponent } from "../abstact-field/abstract-field.component";

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.pug'
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

  getRadiobuttonId(index: number): string {
    return `${this.config.id}${index}`;
  }
}
