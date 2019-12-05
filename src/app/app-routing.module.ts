import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { readdir } from 'fs';

// Imports Component
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'team', component: OurTeamComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
