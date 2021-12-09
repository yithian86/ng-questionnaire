import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLandingPageModule } from './app-landingpage/app.landingpage.module';
import { CommonComponentsModule } from './common-components/common-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    AppRoutingModule,
    AppLandingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
