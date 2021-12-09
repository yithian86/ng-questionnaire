import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLandingPageModule } from './app-landingpage/app.landingpage.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppTranslationService } from './app.translation.service';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from './shared.module';
import { environment } from 'src/environments/environment';

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
    AppLandingPageModule
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
