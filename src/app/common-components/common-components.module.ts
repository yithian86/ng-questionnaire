import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppSpinnerComponent } from './spinner/app.spinner.component';

@NgModule({
  declarations: [
    AppSpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AppSpinnerComponent
  ]
})
export class CommonComponentsModule { }
