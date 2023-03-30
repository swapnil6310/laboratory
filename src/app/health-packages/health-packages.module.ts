import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthPackagesRoutingModule } from './health-packages-routing.module';
import { HealthPackagesComponent } from './health-packages.component';


@NgModule({
  declarations: [
    HealthPackagesComponent
  ],
  imports: [
    CommonModule,
    HealthPackagesRoutingModule
  ]
})
export class HealthPackagesModule { }
