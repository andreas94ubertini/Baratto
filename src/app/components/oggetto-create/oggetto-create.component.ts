import { Component } from '@angular/core';
import {Proposta} from "../../models/proposta";
import {Persona} from "../../models/persona";
import {PersonaService} from "../../services/persona.service";
import {OggettoService} from "../../services/oggetto.service";
import {Oggetto} from "../../models/oggetto";

@Component({
  selector: 'app-oggetto-create',
  templateUrl: './oggetto-create.component.html',
  styleUrl: './oggetto-create.component.css'
})
export class OggettoCreateComponent {
  Nome?: string|undefined;
  Codice?: string|undefined;
  PropietarioCod!: string;
  elencoPers : Persona[] = new Array();

  constructor(private personaSvc: PersonaService, private oggettoSvc: OggettoService) {
  }
  ngOnInit(): void {
    this.elencoPers = this.personaSvc.getAll();
  }
  createObj(){

    let o: Oggetto = new Oggetto(this.Nome, this.Codice, false, this.personaSvc.getPersonaByCod(this.PropietarioCod));
    this.oggettoSvc.InsertNewObj(o, this.PropietarioCod)
    console.log(o)

  }
}
