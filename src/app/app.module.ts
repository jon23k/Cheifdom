import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterComponent } from './enter/enter.component';
import { InfoPageComponent } from './info-page/info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    InfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
