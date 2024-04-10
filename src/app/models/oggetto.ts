import { Persona } from "./persona";
import { Proposta } from "./proposta";

export class Oggetto {
Nome?: string|undefined;
Codice!: string|undefined;
IsSold !: boolean;
Proposte?: Proposta[];
Propietario?: Persona;
    constructor(nome?:string, codice?:string, isSold : boolean = false, propietario?: Persona){
        this.Nome= nome,
        this.Codice=codice,
        this.Propietario= propietario,
        this.IsSold = false

    }
}
