import { FormGroup } from '@angular/forms';
import { Component } from "@angular/core";

import { AppQuestionnaireTypings as WidgetTypings } from "../../model/app-questionnaire.interfaces";

@Component({
  template: ''
})
export abstract class AppAbstractFieldComponent {
  config: WidgetTypings.IQuestion;
  group: FormGroup;

  public ngOnInit() {
    this.group.get(this.config.id)?.setValue(this.config.answer);
  }

}
