import { Component, input, signal } from "@angular/core";

@Component({
    selector: 'mainBox',
    template: `<div className="mainBox">
        <div className="artworkBox">
          <img />
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
        </div>
      </div>`,
})

export class MainBox{
  pkmData = input<{nationalDexNumber: number, name: string, types: string[], abilities: string[]}>({name: '', nationalDexNumber: 0, types: [], abilities: []  });
}