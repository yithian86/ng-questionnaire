import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppWidgetComponent } from '../app.widget.component';
import { AppQuestionnaireService } from './services/app-questionnaire.service';
import { AppQuestionnaireTypings as WidgetTypings } from './model/app-questionnaire.interfaces';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppEventsService } from '../app.events.service';
import { AppTypings } from '../app.interfaces';

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
    private widgetService: AppQuestionnaireService,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private router: Router,
    private appEventsService: AppEventsService
  ) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.currentStepIndex = 0;

    this.widgetService.retrieveQuestionnaire()
      .subscribe({
        next: (data: any) => {
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

  public getStepBarValue = (): number => {
    return (this.currentStepIndex + 1) / this.questionnaire?.steps?.length;
  }

  public getStepInfo = (): string => {
    let stepInfo: string = this.translateService.instant('questionnaire.step.info.text', {
      currentStep: this.currentStepIndex + 1,
      totalSteps: this.questionnaire.steps.length
    });

    if (!!this.questionnaire?.steps[this.currentStepIndex]?.name) {
      stepInfo += ` - ${this.questionnaire?.steps[this.currentStepIndex]?.name}`
    }

    return stepInfo;
  }

  /**
   * @description returns the 'steps' form array from the main form
   */
  private get stepsFormArray(): FormArray {
    return (this.questionnaireFormGroup.get('steps') as FormArray);
  }

  /**
   * @description used in the view. Returns the form related to the currently displayed step
   */
  public get currentStepForm(): FormGroup {
    return (this.stepsFormArray.at(this.currentStepIndex) as FormGroup);
  }


  /**
   * @description main form initializer
   */
  public setFormGroup(): void {
    this.questionnaireFormGroup = this.formBuilder.group({
      steps: new FormArray([])
    });

    this.questionnaire.steps
      .forEach((step: WidgetTypings.IStep) => {
        this.stepsFormArray.push(this.generateStepQuestionnaire(step));
      })
  }

  /**
   *
   * @param increment
   * @description navigates through the questionnaire steps and updates the current step index
   */
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

  public submitQuestionnaire = (): void => {
    this.setWidgetWaitingState();

    this.widgetService.submitQuestionnaire(this.questionnaireFormGroup.value)
      .subscribe({
        next: (data: any) => {
          // Dispatch a message box
          this.appEventsService.flashMessageEmitter.emit({
            label: "questionnaire.flash.message.success",
            type: AppTypings.FLASH_MESSAGE_TYPES.SUCCESS
          })

          // Go back to the Dashboard
          this.router.navigate(['/', 'dashboard']);

          this.setWidgetReadyState();
        },
        error: (reason: any) => {
          console.error('ERROR:', reason);

          this.setWidgetErrorState();
        }
      })
  }

  /**
   *
   * @param step
   * @returns generates a form with all the questions related to the given step
   */
  private generateStepQuestionnaire = (step: WidgetTypings.IStep) => {
    const questionnaireFormGroup: FormGroup = this.formBuilder.group({});
    step.questions
      .forEach((question: WidgetTypings.IQuestion) => {
        questionnaireFormGroup.addControl(question.id, new FormControl(question.options))
      });
    return questionnaireFormGroup;
  }

}
