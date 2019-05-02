import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './modules/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../app/modules/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpService} from './services/http.service';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ElectionComponent} from './election/election.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CreateComponent} from './dashboard/create/create.component';
import {ElectComponent} from './dashboard/elect/elect.component';
import {ProfilsettingsComponent} from './dashboard/profilsettings/profilsettings.component';
import {SideNavComponent} from './dashboard/side-nav/side-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {CreateCandidateComponent} from './dashboard/create/create-candidate/create-candidate.component';
import {ChooseYourClassComponent} from './election/chooseYourClass';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';

import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

import {HomeComponent} from './dashboard/home/home.component';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {InfoComponent} from './info/info.component';
import {AuthGuardService} from './services/auth-guard.service';
import {RoleguardService} from './services/roleguard.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ElectionComponent,
    DashboardComponent,
    CreateComponent,
    ElectComponent,
    ProfilsettingsComponent,
    SideNavComponent,
    HomeComponent,
    CreateCandidateComponent,
    InfoComponent,
    ChooseYourClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    TextareaAutosizeModule
  ],
  providers: [AuthService, AuthGuardService, RoleguardService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
