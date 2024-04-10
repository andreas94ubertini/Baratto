import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaCreateComponent } from './components/persona-create/persona-create.component';
import { OggettoListComponent } from './components/oggetto-list/oggetto-list.component';
import { OggettoCreateComponent } from './components/oggetto-create/oggetto-create.component';
import { PropostaListComponent } from './components/proposta-list/proposta-list.component';
import { PropostaCreateComponent } from './components/proposta-create/proposta-create.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonaListComponent,
    PersonaCreateComponent,
    OggettoListComponent,
    OggettoCreateComponent,
    PropostaListComponent,
    PropostaCreateComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
