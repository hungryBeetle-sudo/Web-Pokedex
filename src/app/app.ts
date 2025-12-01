import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainBox } from './main-box';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainBox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web-pokedex');
  pkmData = signal({
    artworkUrl: "",
    nationalDexNumber: 205,
    name: "Forretress",
    types: ["Bug", "Steel"],
    abilities: ["Sturdy", "Overcoat"],
    height: (12 / 10),
    weight: (1258 / 10)
  });

  constructor() {
    fetch("https://pokeapi.co/api/v2/pokemon/215")
      .then(response => response.json())
      .then(data => {
        this.pkmData.set({
          artworkUrl: data.sprites.other["official-artwork"].front_default,
          nationalDexNumber: data.id,
          name: data.name,
          types: data.types.map((typeInfo: any) => typeInfo.type.name),
          abilities: data.abilities.map((abilityInfo: any) => abilityInfo.ability.name),
          height: (data.height / 10),
          weight: (data.weight / 10)
        });
      });
  }
}