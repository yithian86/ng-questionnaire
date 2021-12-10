import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { environment } from 'src/environments/environment';
import { AppTranslationService } from './app.translation.service';
import { SharedModule } from './shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLandingPageModule } from './app-landingpage/app.landingpage.module';
import { AppQuestionnaireModule } from './app-questionnaire/app.questionnaire.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: environment.defaultLocale,
      loader: {
        provide: TranslateLoader,
        useFactory: (AppTranslationService.createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    AppLandingPageModule,
    AppQuestionnaireModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: AppTranslationService.translationInitializer,
      deps: [AppTranslationService],
      multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
