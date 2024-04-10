import { Oggetto } from "./oggetto";

export class Persona {
    nominativo?: string|undefined;
    codice?: string|undefined;
    listaOggetti?: Oggetto[] | undefined;



    constructor(nominativo?:string,codice?:string){
        this.nominativo=nominativo;
        this.codice = codice;
    }
    getNumberOfObjects() : number{
        if(this.listaOggetti)
            return this.listaOggetti?.length;
        return 0;
    }


}
