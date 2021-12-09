import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppTranslationService } from './app.translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnChanges {

  constructor(
    private router: Router,
    private translationService: AppTranslationService
  ) {
  }

  ngOnInit(): void {
    const locale: string = localStorage.getItem('locale') || environment.defaultLocale;
    this.translationService.init(locale);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  get pageTitle(): string {
    if (!this.router?.url) {
      return '';
    }

    const pageName: string = this.router.url.substring(1, this.router.url.length);
    return `pages.${pageName}`
  }

}
