import { Componente } from "./component"

export class Arquivo implements Componente {
    constructor(private nome: string) {}

    exibir(): void {
        console.log(`Arquivo: ${this.nome}`)
    }
}