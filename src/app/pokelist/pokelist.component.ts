import { Component, OnInit } from '@angular/core';
import { DatamonService } from "src/app/datamon.service"
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  public pokeStream: Subject<Array<String>>;

  constructor(private pokelist: DatamonService) {
  }

  ngOnInit() {
    this.pokeStream = this.pokelist.getPokemons();
  }

  public loadNext(){
    console.log('click');
    this.pokelist.loadPokemons();
  }

}
