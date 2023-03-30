import { ArticalsComponent } from './articals/articals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FeaturesComponent } from './features/features.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'doctors', component: DoctorsComponent},
  { path: 'articles', component: ArticalsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
