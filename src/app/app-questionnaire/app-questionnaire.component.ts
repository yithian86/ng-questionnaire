import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppWidgetComponent } from '../app.widget.component';
import { AppQuestionnaireService } from './services/app-questionnaire.service';
import { AppQuestionnaireTypings as WidgetTypings } from './model/app-questionnaire.interfaces';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-app-questionnaire',
  templateUrl: './app-questionnaire.pug',
  styleUrls: ['./app-questionnaire.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AppQuestionnaireService]
})
export class AppQuestionnaireComponent extends AppWidgetComponent implements OnInit {

  public questionnaire: WidgetTypings.IQuestionnaire;
  public currentStepIndex: number;
  public questionnaireFormGroup: FormGroup;

  constructor(
    public widgetService: AppQuestionnaireService,
    private translateService: TranslateService,
    private formBuilder: FormBuilder
  ) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.currentStepIndex = 0;

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

  public getStepInfo = (): string => {
    return this.translateService.instant('questionnaire.step.info.text', {
      currentStep: this.currentStepIndex + 1,
      totalSteps: this.questionnaire.steps.length
    });
  }

  /**
   * @description Build a form group containing all the form controls corresponding to the view questions
   */
  public setFormGroup(): void {
    this.questionnaireFormGroup = this.formBuilder.group({});
    this.questionnaire.steps[this.currentStepIndex].questions
      .forEach((question: WidgetTypings.IQuestion) => {
        this.questionnaireFormGroup.addControl(question.id, new FormControl(question.options))
      });
  }

  public updateStep = (increment: number): void => {
    // Check if this is the first step
    if (increment <= 0 && this.currentStepIndex === 0) {
      return;
    }

    // Check if this is the last step
    if (increment > 0 && this.currentStepIndex === this.questionnaire?.steps?.length) {
      return;
    }

    this.currentStepIndex += increment;
  }

}
