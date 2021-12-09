import { NgModule } from '@angular/core';
import { AppQuestionnaireComponent } from '../app-questionnaire/app-questionnaire.component';
import { SharedModule } from '../shared.module';
import { AppLandingPageComponent } from './app.landingpage.component';

@NgModule({
  declarations: [
    AppLandingPageComponent,
    AppQuestionnaireComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AppLandingPageComponent,
    AppQuestionnaireComponent
  ]
})
export class AppLandingPageModule { }
