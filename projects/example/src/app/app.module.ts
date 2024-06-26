import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularLibModule } from '@leonardocbalbino/angular-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
