import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokelistComponent} from './pokelist/pokelist.component';
import {PokedetailsComponent} from './pokedetails/pokedetails.component';
import {PokepanelComponent} from './pokepanel/pokepanel.component';

const routes: Routes = [
  {path: '', component: PokelistComponent},
  {path: 'details/:id', component: PokedetailsComponent},
  {path: 'panel/:user', component: PokepanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
