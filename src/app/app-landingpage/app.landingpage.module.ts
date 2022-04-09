import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { AppLandingPageComponent } from './app.landingpage.component';
import { AppQuestionnaireStatsComponent } from './components/app-questionnaire-stats/app-questionnaire-stats';

@NgModule({
  declarations: [
    AppLandingPageComponent,
    AppQuestionnaireStatsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AppLandingPageComponent
  ]
})
export class AppLandingPageModule { }
