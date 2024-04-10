import { Injectable } from '@angular/core';
import {PersonaService} from "./persona.service";
import {Persona} from "../models/persona";
import {Oggetto} from "../models/oggetto";
import {Proposta} from "../models/proposta";

@Injectable({
  providedIn: 'root'
})
export class OggettoService {
  elencoOggetti: Oggetto[] = new Array();
  constructor(private personaSvc : PersonaService) {
    if(!localStorage.getItem("objLista"))
      localStorage.setItem("objLista", JSON.stringify(this.elencoOggetti))
    else
      this.elencoOggetti = JSON.parse(localStorage.getItem("objLista")!);
  }
  getAll (): Oggetto[]{
    return JSON.parse(localStorage.getItem("objLista")!);
  }
  InsertNewObj(obj: Oggetto, codice : string) : void{
      this.elencoOggetti.push(obj);
      localStorage.setItem("objLista", JSON.stringify(this.elencoOggetti))
      this.personaSvc.addObjByCod(codice, obj);
  }
  GetObjByCod(codice: string): Oggetto | undefined{
    let obj: Oggetto| undefined;
    this.elencoOggetti.forEach(o=>{
      if(o.Codice == codice)
        obj = o
    })
    return obj;
  }
  ChangeStatus(codice:string){

    this.elencoOggetti.forEach(o=>{
      if(o.Codice == codice)
        o.IsSold = true;
    })
    localStorage.setItem("objLista", JSON.stringify(this.elencoOggetti))
  }

  AddPropostaToObj(codice: string| undefined, p: Proposta){
    this.elencoOggetti.forEach(o=>{
      if(o.Codice == codice)
        if(o.Proposte) {
          o.Proposte?.push(p)
        }
        else {
          o.Proposte = new Array()
          o.Proposte.push(p)
        }

    })
    localStorage.setItem("objLista", JSON.stringify(this.elencoOggetti))
  }
}
