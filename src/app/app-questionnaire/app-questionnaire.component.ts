import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppWidgetComponent } from '../app.widget.component';
import { AppQuestionnaireService } from './services/app-questionnaire.service';
import { AppQuestionnaireTypings as WidgetTypings } from './model/app-questionnaire.interfaces';

@Component({
  selector: 'app-app-questionnaire',
  templateUrl: './app-questionnaire.pug',
  styleUrls: ['./app-questionnaire.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AppQuestionnaireService]
})
export class AppQuestionnaireComponent extends AppWidgetComponent implements OnInit {

  public questionnaire: WidgetTypings.IQuestionnaire;
  public questionnaireFormGroup: FormGroup;

  constructor(
    public widgetService: AppQuestionnaireService,
    private formBuilder: FormBuilder
  ) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.widgetService.retrieveQuestionnaire()
      .subscribe({
        next: (data: any) => {
          console.debug('OK', data);
          this.questionnaire = data;
          this.setFormGroup();

          this.setWidgetReadyState();
        },
        error: (reason: any) => {
          console.error('ERROR:', reason);

          this.setWidgetErrorState();
        }
      })
  }

  /**
   * @description Build a form group containing all the form controls corresponding to the view questions
   */
  public setFormGroup() {
    this.questionnaireFormGroup = this.formBuilder.group({});
    this.questionnaire.questions
      .forEach((question: WidgetTypings.IQuestion) => {
        this.questionnaireFormGroup.addControl(question.id, new FormControl(question.options))
      });
  }

}
