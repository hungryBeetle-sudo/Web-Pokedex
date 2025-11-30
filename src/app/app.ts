import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainBox } from './main-box';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainBox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web-pokedex');
  pkmData = signal({
    nationalDexNumber: 205,
    name: "Forretress",
    types: ["Bug", "Steel"],
    abilities: ["Sturdy", "Overcoat"]
  });
}