import { Oggetto } from "./oggetto";

export class Proposta {
    codice?: string|undefined;
    oggettoRif!: Oggetto | undefined;
    oggettoProp!: Oggetto | undefined;
    isAccepted?: boolean;
    constructor(oggettoRif?:Oggetto,oggettoProp?:Oggetto, isAccepted:boolean=false,codice?:string,){
        this.codice = codice,
        this.oggettoRif = oggettoRif,
        this.oggettoProp = oggettoProp,
        this.isAccepted= isAccepted
    }
}
