import { Component } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-persona-create',
  templateUrl: './persona-create.component.html',
  styleUrl: './persona-create.component.css'
})
export class PersonaCreateComponent {
    nome?:string;
    codice?:string;

    constructor(private personaSvc:PersonaService){

    }

    insertPersona(){
      
      let p = new Persona(this.nome,this.codice)
      console.log(p);
      this.personaSvc.insertPersona(p);
    }

}
