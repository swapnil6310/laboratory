import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { FeaturesComponent } from './features/features.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ArticalsComponent } from './articals/articals.component';


@NgModule({
  declarations: [
    AboutComponent,
    FeaturesComponent,
    DoctorsComponent,
    ArticalsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
