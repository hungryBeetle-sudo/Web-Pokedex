import { Component, input, signal } from "@angular/core";

@Component({
    selector: 'mainBox',
    template: `<div className="mainBox">
        <div className="artworkBox">
          <img src={{pkmData().artworkUrl}}/>
        </div>
        <div className="infoBox">
          <h2>National Dex #</h2>
          <p>{{pkmData().nationalDexNumber}}</p>
          <h2>Name</h2>
          <p>{{pkmData().name}}</p>
          <h2>Types</h2>
          <p>
            @for(type of pkmData().types; track type) {
              {{type}}
            }
          </p>
          <h2>Abilities</h2>
          <p>
            @for(ability of pkmData().abilities; track ability) {
              {{ability}}
            }
          </p>
          <h2>Height</h2>
          <p>{{pkmData().height}} m</p>
          <h2>Weight</h2>
          <p>{{pkmData().weight}} kg</p>
        </div>
      </div>`,
})

export class MainBox{
  pkmData = input<{
artworkUrl: string;nationalDexNumber: number, name: string, types: string[], abilities: string[], height: number, weight: number
}>({
  name: '', nationalDexNumber: 0, types: [], abilities: [],
  artworkUrl: "", height: 0, weight: 0
});
}