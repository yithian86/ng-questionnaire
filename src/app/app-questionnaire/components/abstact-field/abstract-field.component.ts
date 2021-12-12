import { FormControl, FormGroup } from '@angular/forms';
import { Component } from "@angular/core";

import { AppQuestionnaireTypings as WidgetTypings } from "../../model/app-questionnaire.interfaces";

@Component({
  template: ''
})
export abstract class AppAbstractFieldComponent {
  config: WidgetTypings.IQuestion;
  group: FormGroup;

  public ngOnInit() {
    // If the user has changed the answer, don't overwrite it
    if (this.currentControl?.pristine) {
      this.currentControl?.setValue(this.config.answer);
    }
  }

  public get currentControl(): FormControl {
    return this.group.get(this.config.id) as FormControl;
  }

}
