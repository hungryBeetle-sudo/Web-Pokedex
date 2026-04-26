import { HttpClient } from "@angular/common/http";
import { Component, input, signal, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  imports: [ReactiveFormsModule],
  selector: 'mainBox',
  templateUrl: './main-box.component.html',
})

export class MainBox {
  private http = inject(HttpClient);
  pkmData = signal<{
    artworkUrl: string;
    nationalDexNumber: number,
    name: string, types: string[], 
    abilities: string[], 
    height: number, 
    weight: number
  }>({
    name: '', nationalDexNumber: 0, types: [], abilities: [],
    artworkUrl: "", height: 0, weight: 0
  });

  fb = inject(FormBuilder);
  started = signal(false);

  formPesquisa = this.fb.group({
    nome: ['']
  })

  onSubmit(){
    console.log(this.formPesquisa.value);
    this.started.set(true);
    this.pesquisar();
  }

  pesquisar(){
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.formPesquisa.value.nome}`).subscribe((data: any) => {
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