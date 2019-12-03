import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {forkJoin, Observable, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import { Pokemon } from 'src/models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class DatamonService {

  private readonly url: string = 'https://pokeapi.co/api/v2/';
  private readonly pokemons: Array<Pokemon> = [];
  private subscription: Subscription = null;

  constructor(private http: HttpClient) { }

  public loadPokemons(): void {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    const observers: Array<Observable<any>> = [];
    for (let x = 1; x <= 6; x++) {
      observers.push(
        this.http.get(`${this.url}pokemon/${this.pokemons.length + x}`).pipe(
          take(1)
        ));
    }
    this.subscription = forkJoin(observers).subscribe( list => {
        list.forEach( e => {
          const pokemon = new Pokemon();
          pokemon.setInfo(e);
          this.pokemons.push(pokemon);
          console.log(pokemon);
        });
    });
  }

  public getPokemons(): Array<Pokemon> {
    return this.pokemons;
  }

}
