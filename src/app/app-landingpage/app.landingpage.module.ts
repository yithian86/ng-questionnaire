import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppQuestionnaireComponent } from '../app-questionnaire/app-questionnaire.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { AppLandingPageComponent } from './app.landingpage.component';

@NgModule({
  declarations: [
    AppLandingPageComponent,
    AppQuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonComponentsModule
  ],
  exports: [AppLandingPageComponent]
})
export class AppLandingPageModule { }
