import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WertpapierListeComponent } from './wertpapier-liste/wertpapier-liste.component';

const routes: Routes = [
  { path: 'wertpapiere', component: WertpapierListeComponent },
  { path: '', redirectTo: '/wertpapiere', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
