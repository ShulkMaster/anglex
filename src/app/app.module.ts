import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { PokepanelComponent } from './pokepanel/pokepanel.component';
import { NavegationBarComponent } from './navegation-bar/navegation-bar.component';
import { CardComponent } from './pokelist/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokedetailsComponent,
    PokepanelComponent,
    NavegationBarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
