import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/models/Pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
    console.log(this.pokemon.sprites.entries());
  }

}
