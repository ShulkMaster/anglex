import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatamonService {

  private readonly pokemons: Array<string> = [];
  private readonly pokeData: Subject<Array<string>> = new Subject();

  constructor() { }

  public loadPokemons(): void {
    for (let i = 0; i < 5; i++) {
      this.pokemons.push(`pokemon ${this.pokemons.length}`);
    }
    this.pokeData.next(this.pokemons);
  }

  public getPokemons(): Subject<Array<string>> {
    return this.pokeData;
  }

}
