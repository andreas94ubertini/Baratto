import { Injectable } from '@angular/core';
import {OggettoService} from "./oggetto.service";
import {Proposta} from "../models/proposta";

@Injectable({
  providedIn: 'root'
})
export class PropostaService {
proposteList : Proposta[]= new Array();
  constructor(private oggettoSvc : OggettoService) {
    if(!localStorage.getItem("propLista"))
      localStorage.setItem("propLista", JSON.stringify(this.proposteList))
    else
      this.proposteList = JSON.parse(localStorage.getItem("propLista")!);

  }
  addProposta(p : Proposta){
    this.proposteList.push(p);
    localStorage.setItem("propLista", JSON.stringify(this.proposteList))
    this.oggettoSvc.AddPropostaToObj(p.oggettoRif?.Codice, p)
  }


}
