import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthPackagesComponent } from './health-packages.component';

const routes: Routes = [{ path: '', component: HealthPackagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthPackagesRoutingModule { }
