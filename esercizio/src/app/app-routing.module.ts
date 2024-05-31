import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompletatiComponent } from './components/completati/completati.component';
import { UtentiComponent } from './components/utenti/utenti.component';

const routes: Routes = [
{path: '', component:HomeComponent },
{path: 'completati', component: CompletatiComponent},
{path: 'utenti', component: UtentiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
