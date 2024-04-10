import { Component } from '@angular/core';
import {Oggetto} from "../../models/oggetto";
import {OggettoService} from "../../services/oggetto.service";
import {PropostaService} from "../../services/proposta.service";
import {Proposta} from "../../models/proposta";

@Component({
  selector: 'app-proposta-create',
  templateUrl: './proposta-create.component.html',
  styleUrl: './proposta-create.component.css'
})
export class PropostaCreateComponent {
  OggettoRif!: string;
  oggettoProp! : string;
  elencoObj! : Oggetto[]

  constructor(private oggettoSvc: OggettoService, private propostaSvc: PropostaService) {
  }
  ngOnInit(){
    this.elencoObj = this.oggettoSvc.getAll()
  }
  createProposta(){
    let prop: Proposta = new Proposta(this.oggettoSvc.GetObjByCod(this.OggettoRif), this.oggettoSvc.GetObjByCod(this.oggettoProp), false, "AAA");
    this.propostaSvc.addProposta(prop);
  }
}
