import { Proposta } from "./proposta";

export class Transazione {
    codice?: string|undefined;
    propostaRif?:Proposta;
    constructor(codice?:string, propostaRif?:Proposta){
        this.codice = codice,
        this.propostaRif = propostaRif
    }
}
