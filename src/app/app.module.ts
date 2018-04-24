import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './services/services.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    ServicesComponent,
    ShowcaseComponent,
    BannerComponent,
    AboutContentComponent,
    TeamComponent,
    OracleComponent,
    SapComponent,
    WorkdayComponent,
    AboutComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
