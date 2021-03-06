import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { BannerComponent } from './banner/banner.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutContentComponent } from './about-content/about-content.component';
import { TeamComponent } from './team/team.component';
import { OracleComponent } from './oracle/oracle.component';
import { SapComponent } from './sap/sap.component';
import { WorkdayComponent } from './workday/workday.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OracleContentComponent } from './oracle-content/oracle-content.component';
import { SapContentComponent } from './sap-content/sap-content.component';
import { WorkdayContentComponent } from './workday-content/workday-content.component';
import { LfjHomeComponent } from './lfj-home/lfj-home.component';
import { LfjLoginComponent } from './lfj-login/lfj-login.component';
import { LfjProfileComponent } from './lfj-profile/lfj-profile.component';
import { LfjSkillsComponent } from './lfj-skills/lfj-skills.component';
import { LfjSignupComponent } from './lfj-signup/lfj-signup.component';
import { LfjOverviewComponent } from './lfj-overview/lfj-overview.component';
import { LfjNavComponent } from './lfj-nav/lfj-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    ShowcaseComponent,
    BannerComponent,
    AboutContentComponent,
    TeamComponent,
    OracleComponent,
    SapComponent,
    WorkdayComponent,
    AboutComponent,
    ContactComponent,
    ContactFormComponent,
    PagenotfoundComponent,
    OracleContentComponent,
    SapContentComponent,
    WorkdayContentComponent,
    LfjHomeComponent,
    LfjLoginComponent,
    LfjProfileComponent,
    LfjSkillsComponent,
    LfjSignupComponent,
    LfjOverviewComponent,
    LfjNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatSnackBarModule,
    MatIconModule,
    HttpModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
