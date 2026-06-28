class Arquivo {
    constructor(private nome: string) {}

    exibir(): void {
        console.log(`Arquivo: ${this.nome}`);
    }
}

class Pasta {
    private arquivos: Arquivo[] = [];
    private pastas: Pasta[] = [];

    constructor(private nome: string) {}

    adicionarArquivo(arquivo: Arquivo): void {
        this.arquivos.push(arquivo);
    }

    adicionarPasta(pasta: Pasta): void {
        this.pastas.push(pasta);
    }

    exibir(): void {
        console.log(`Pasta: ${this.nome}`);

        this.arquivos.forEach(arquivo => arquivo.exibir());

        this.pastas.forEach(pasta => pasta.exibir());
    }
}

const relatorio = new Arquivo("relatorio.pdf");
const foto = new Arquivo("foto.jpg");

const documentos = new Pasta("Documentos");
documentos.adicionarArquivo(relatorio);

const imagens = new Pasta("Imagens");
imagens.adicionarArquivo(foto);

const principal = new Pasta("Principal");
principal.adicionarPasta(documentos);
principal.adicionarPasta(imagens);

principal.exibir();