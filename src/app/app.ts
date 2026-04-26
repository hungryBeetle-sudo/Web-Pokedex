import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainBox } from './main-box.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainBox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web-pokedex');
}