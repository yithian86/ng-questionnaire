import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppAbstractFieldComponent } from "../abstact-field/abstract-field.component";
import { AppQuestionnaireTypings as WidgetTypings } from '../../model/app-questionnaire.interfaces';

@Component({
  selector: 'app-input-text',
  templateUrl: 'input-text.pug',
  styleUrls: ['input-text.scss']
})
export class InputTextComponent extends AppAbstractFieldComponent implements WidgetTypings.IField, OnInit {
  override config: WidgetTypings.IQuestion;
  override group: FormGroup;
  isDisabled: boolean;

  constructor() {
    super();
  }

  override ngOnInit(){
    super.ngOnInit();
  }

  ngOnchange(changes: SimpleChange) {
    console.debug(changes);
  }
}
