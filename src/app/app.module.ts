import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLandingPageModule } from './app-landingpage/app.landingpage.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationService } from './translation.service';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared.module';

export function translationInitializer(translationService: TranslationService) {
  return function () {
    return translationService.init('en');
  };
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-GB',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    AppLandingPageModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: translationInitializer,
      deps: [TranslationService],
      multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
