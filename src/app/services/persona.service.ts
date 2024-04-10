import { Injectable } from '@angular/core';
import { Oggetto } from '../models/oggetto';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaList? : Persona[] = new Array();
  constructor() {
    if(!localStorage.getItem("personaLista"))
      localStorage.setItem("personaLista", JSON.stringify(this.personaList))

   }
  getAll(): Persona[]{

      return  JSON.parse(localStorage.getItem("personaLista")!);

  }
  insertPersona(p:Persona):boolean{
      let elenco = JSON.parse(localStorage.getItem("personaLista")!);
      elenco.push(p);
      localStorage.setItem("personaLista", JSON.stringify(elenco))
      return true;

  }

  getPersonaByCod(codice:string):Persona | undefined{
    let elenco : Persona[] = JSON.parse(localStorage.getItem("personaLista")!);
    let persona: Persona | undefined;
    elenco.forEach(p=>{
      if(p.codice == codice)
        persona= p;

    })
    return persona;
  }
  addObjByCod(codice:string, obj: Oggetto): boolean{
    let elenco : Persona[] = JSON.parse(localStorage.getItem("personaLista")!);
    let index : number = 0;
    let persona: Persona | undefined;
    elenco.forEach(p=>{
      if(p.codice == codice)
        persona= p;

    })
    if(persona != undefined){
      if(persona.listaOggetti != undefined) {
        persona.listaOggetti?.push(obj)
        elenco.forEach(p=>{
          if(p.codice == codice)
            if (persona) {
              p = persona;
            }
        })
        localStorage.setItem("personaLista", JSON.stringify(elenco))
        return true;

      }else{
        persona.listaOggetti = new Array();
        persona.listaOggetti.push(obj)
        elenco.forEach(p=>{
          if(p.codice == codice)
            if (persona) {
              p = persona;
            }
        })
        localStorage.setItem("personaLista", JSON.stringify(elenco))
        return true;

      }

    }
    return false;
  }


}
