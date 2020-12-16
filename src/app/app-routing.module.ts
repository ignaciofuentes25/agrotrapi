import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CattleComponent } from './component/cattle/cattle.component';
import { CertificatesComponent } from './component/certificates/certificates.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // Initial page
  { path: 'home', component: HomeComponent },
  { path: 'cattle', component: CattleComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'contact', component: ContactComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
