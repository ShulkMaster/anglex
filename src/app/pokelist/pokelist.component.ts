import { Component, OnInit } from '@angular/core';
import { DatamonService } from 'src/app/datamon.service';
import { Pokemon } from 'src/models/Pokemon';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  public pokeArray: Array<Pokemon> = [];

  constructor(private pokelist: DatamonService) {
  }

  ngOnInit() {
    this.pokeArray = this.pokelist.getPokemons();
  }

  public loadNext() {
    this.pokelist.loadPokemons();
  }

}
