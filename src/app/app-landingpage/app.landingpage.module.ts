import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { AppLandingPageComponent } from './app.landingpage.component';

@NgModule({
  declarations: [
    AppLandingPageComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AppLandingPageComponent
  ]
})
export class AppLandingPageModule { }
