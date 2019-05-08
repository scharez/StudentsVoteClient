import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {ElectionComponent} from '../election/election.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {CreateComponent} from '../dashboard/create/create.component';
import {ElectComponent} from '../dashboard/elect/elect.component';
import {ProfilsettingsComponent} from '../dashboard/profilsettings/profilsettings.component';
import {HomeComponent} from '../dashboard/home/home.component';
import {RoleguardService} from '../services/roleguard.service';
import {InfoComponent} from '../info/info.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {AuthService} from '../services/auth.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'election', component: ElectionComponent, /*canActivate: [RoleguardService], data: {expectedRoles: ['ADMIN', 'Teacher']}*/},
  {path: 'info', component: InfoComponent, /*canActivate: [AuthGuardService]*/},
  {path: 'dashboard', component: DashboardComponent /*canActivate: [RoleguardService]*/,
    data: {
      expectedRoles: ['ADMIN']
    },
    children: [
    { path: 'home', component: HomeComponent},
    { path: 'create', component: CreateComponent},
    { path: 'elect', component: ElectComponent},
    { path: 'profilsettings', component: ProfilsettingsComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
