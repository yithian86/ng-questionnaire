import { NgModule } from '@angular/core';
import { AppQuestionnaireComponent } from './app-questionnaire.component';
import { SharedModule } from '../shared.module';
import { AppDynamicFieldDirective } from './directives/app-dynamic-field.directive';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { InputTextComponent } from './components/input-text/input-text.component';


@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    AppQuestionnaireComponent
  ],
  declarations: [
    AppQuestionnaireComponent,
    // Form fields
    AppDynamicFieldDirective,
    RadiobuttonComponent,
    InputTextComponent
  ]
})
export class AppQuestionnaireModule { }
