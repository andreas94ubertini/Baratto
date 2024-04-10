import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaCreateComponent } from './components/persona-create/persona-create.component';
import {OggettoCreateComponent} from "./components/oggetto-create/oggetto-create.component";
import {OggettoListComponent} from "./components/oggetto-list/oggetto-list.component";
import {PropostaCreateComponent} from "./components/proposta-create/proposta-create.component";

const routes: Routes = [
  {path: "", redirectTo:"persone/lista", pathMatch :"full"},
  {path: "persona/lista", component: PersonaListComponent},
  {path: "persona/inserisci", component: PersonaCreateComponent},
  {path: "oggetto/inserisci", component: OggettoCreateComponent},
  {path: "oggetto/lista", component: OggettoListComponent},
  {path: "proposta/inserisci", component: PropostaCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
