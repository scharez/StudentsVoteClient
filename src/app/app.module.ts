import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from '../app/modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpService} from './services/http.service';
import { AuthService} from './services/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule

  ],
  providers: [HttpService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
