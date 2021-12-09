import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';


@Injectable({  providedIn: 'root'})
export class AppTranslationService {
  constructor(private translateService: TranslateService) {}

  init(locale: string) {
    this.translateService.addLangs(['en-GB', 'it-IT']);
    this.translateService.use(locale);
  }

  static translationInitializer(translationService: AppTranslationService) {
    return function () {
      return translationService.init(environment.defaultLocale);
    };
  }

  static createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
  }
}
