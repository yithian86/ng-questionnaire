import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { CommonComponentsModule } from './common-components/common-components.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule,
    CommonComponentsModule
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule,
    CommonComponentsModule
  ]
})
export class SharedModule { }
