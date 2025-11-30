import { Component } from "@angular/core";

@Component({
    selector: 'mainBox',
    template: `<div className="mainBox">
        <div className="artworkBox">
          <img />
        </div>
        <div className="infoBox">
          <h2>Types</h2>
          <p></p>
          <h2>Abilities</h2>
          <p></p>
        </div>
      </div>`,
})
export class MainBox{}