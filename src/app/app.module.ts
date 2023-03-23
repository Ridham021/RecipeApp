import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { InactiveUserComponent } from './inactive-user/inactive-user.component';
import {SwitchServices} from "./services/switch.services";

@NgModule({
  declarations: [
    AppComponent,
    ActiveUserComponent,
    InactiveUserComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [ SwitchServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
