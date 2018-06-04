import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { OracleComponent } from './oracle/oracle.component';
import { SapComponent } from './sap/sap.component';
import { WorkdayComponent } from './workday/workday.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LfjLoginComponent } from './lfj-login/lfj-login.component';
import { LfjSignupComponent } from './lfj-signup/lfj-signup.component';
import { LfjHomeComponent } from './lfj-home/lfj-home.component';
import { LfjOverviewComponent } from './lfj-overview/lfj-overview.component';
import { LfjProfileComponent } from './lfj-profile/lfj-profile.component';
import { LfjSkillsComponent } from './lfj-skills/lfj-skills.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path :'', redirectTo: '/home', pathMatch: 'full'},
  {path :'home', component : HomeComponent},
  {path : 'oracle', component : OracleComponent},
  {path : 'sap', component : SapComponent},
  {path : 'workday', component : WorkdayComponent},
  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'login', component : LfjLoginComponent},
  {path : 'signup', component : LfjSignupComponent},
  {path : 'LFJ', component: LfjHomeComponent, 
children:[
  {path:'overview', component: LfjOverviewComponent},
  {path:'profile', component: LfjProfileComponent},
  {path:'skills', component: LfjSkillsComponent}
]},
  {path : '**', component : PagenotfoundComponent}
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
