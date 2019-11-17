import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './modules/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './modules/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';

import {HttpService} from './services/http.service';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ElectionComponent} from './election/election.component';
import {ElectSettingsComponent} from './dashboard/home/components/elect-settings/elect-settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CreateComponent} from './dashboard/create/create.component';
import {ProfilsettingsComponent} from './dashboard/profilsettings/profilsettings.component';
import {SideNavComponent} from './dashboard/side-nav/side-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {CreateCandidateComponent} from './dashboard/create/create-candidate/create-candidate.component';
import {ChooseYourClassComponent} from './election/chooseYourClassComponent';

import {VotingresultsComponent} from './dashboard/home/components/votingresults/votingresults.component';
import {ClassSettings} from './dashboard/home/components/elected-classes/classSettings';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule, MatDialogModule
} from '@angular/material';


import {HomeComponent} from './dashboard/home/home.component';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {InfoComponent} from './info/info.component';
import {AuthGuardService} from './services/auth-guard.service';
import {RoleguardService} from './services/roleguard.service';
//import { FinalScoreComponent } from './election/final-score/final-score.component';
import { FinishedComponent } from './election/finishedComponent';
import { NewElectionComponent } from './dashboard/new-election/new-election.component';
import { ElectedClassesComponent } from './dashboard/home/components/elected-classes/elected-classes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ElectionComponent,
    DashboardComponent,
    CreateComponent,
    ProfilsettingsComponent,
    SideNavComponent,
    HomeComponent,
    CreateCandidateComponent,
    InfoComponent,
    ChooseYourClassComponent,
    ElectSettingsComponent,
    VotingresultsComponent,
   // FinalScoreComponent,
    FinishedComponent,
    NewElectionComponent,
    ElectedClassesComponent,
    ClassSettings
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
    MatDialogModule,
    HttpClientModule,
    GoogleChartsModule.forRoot(),
  ], entryComponents: [
    ChooseYourClassComponent,
    FinishedComponent,
    ClassSettings
  ],
  providers: [AuthService, AuthGuardService, RoleguardService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
