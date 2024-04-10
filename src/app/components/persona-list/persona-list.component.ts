import { Component } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrl: './persona-list.component.css'
})
export class PersonaListComponent {
  elenco:Persona[] = new Array();

  constructor(private personaSvc:PersonaService){

  }
  ngOnInit(): void {
    this.elenco = this.personaSvc.getAll();
  }
}
