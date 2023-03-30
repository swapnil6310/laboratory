import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'contactUs', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'healthPackages', loadChildren: () => import('./health-packages/health-packages.module').then(m => m.HealthPackagesModule) },
  { path: 'bookAppointment', loadChildren: () => import('./book-appointment/book-appointment.module').then(m => m.BookAppointmentModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
