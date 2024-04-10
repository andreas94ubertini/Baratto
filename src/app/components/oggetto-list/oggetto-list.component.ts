import { Component } from '@angular/core';
import {Oggetto} from "../../models/oggetto";
import {OggettoService} from "../../services/oggetto.service";

@Component({
  selector: 'app-oggetto-list',
  templateUrl: './oggetto-list.component.html',
  styleUrl: './oggetto-list.component.css'
})
export class OggettoListComponent {
  elencoOggetti: Oggetto[] = new Array();

  constructor(private oggettoSvc: OggettoService) {
  }
  ngOnInit(){
    this.elencoOggetti = this.oggettoSvc.getAll();
  }

}
