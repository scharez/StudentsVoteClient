import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {ElectionComponent} from '../election/election.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {CreateComponent} from '../dashboard/create/create.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'election', component: ElectionComponent},
  {path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'create', component: CreateComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
