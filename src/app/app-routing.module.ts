import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { OracleComponent } from './oracle/oracle.component';
import { SapComponent } from './sap/sap.component';
import { WorkdayComponent } from './workday/workday.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path :'', redirectTo: '/home', pathMatch: 'full'},
  {path :'home', component : HomeComponent},
  {path :'home2', component : HomeComponent},
  {path :'home3', component : HomeComponent},
  {path :'home4', component : HomeComponent},
  {path : 'oracle', component : OracleComponent},
  {path : 'sap', component : SapComponent},
  {path : 'workday', component : WorkdayComponent},
  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactComponent},
  {path : '**', component : PagenotfoundComponent}

];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
