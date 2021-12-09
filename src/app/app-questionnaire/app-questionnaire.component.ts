import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AppWidgetComponent } from '../app.widget.component';
import { AppQuestionnaireService } from './services/app-questionnaire.service';

@Component({
  selector: 'app-app-questionnaire',
  templateUrl: './app-questionnaire.pug',
  styleUrls: ['./app-questionnaire.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AppQuestionnaireService]
})
export class AppQuestionnaireComponent extends AppWidgetComponent implements OnInit {

  constructor(public widgetService: AppQuestionnaireService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.setWidgetWaitingState();
    this.widgetService.retrieveQuestionnaire()
      .subscribe({
        next: (data: any) => {
          console.debug('OK', data);
          this.setWidgetReadyState();
        },
        error: (reason: any) => {
          console.error('ERROR:', reason);

          this.setWidgetErrorState();
        }
      })
  }

}
