import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    OurTeamComponent,
    TestimonialsComponent,
    ContactsComponent,
    LayoutsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
