import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {ElectionComponent} from '../election/election.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {CreateComponent} from '../dashboard/create/create.component';
import {ElectComponent} from '../dashboard/elect/elect.component';
import {ProfilsettingsComponent} from '../dashboard/profilsettings/profilsettings.component';
import {HomeComponent} from '../dashboard/home/home.component';
import {AuthService} from '../services/auth.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'election', component: ElectionComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthService],
  children: [
    { path: '', component: HomeComponent},
    { path: 'create', component: CreateComponent},
    { path: 'elect', component: ElectComponent},
    { path: 'profilsettings', component: ProfilsettingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


//  canActivate: [AuthService]
