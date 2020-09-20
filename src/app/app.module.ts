import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterComponent } from './enter/enter.component';
import { InfoComponent } from './info/info.component';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
