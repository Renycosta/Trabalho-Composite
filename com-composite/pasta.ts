import { Componente } from "./component"

export class Pasta implements Componente {
    private componentes: Componente[] = []

    constructor(private nome: string) {}

    adicionar(componente: Componente): void {
        this.componentes.push(componente)
    }

    remover(componente: Componente): void {
        this.componentes = this.componentes.filter(
            item => item !== componente
        );
    }

    exibir(): void {
        console.log(`Pasta: ${this.nome}`);

        this.componentes.forEach(componente =>
            componente.exibir()
        );
    }
}