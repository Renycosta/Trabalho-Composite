import { Pasta } from "./pasta.ts"
import { Arquivo } from "./arquivo.ts"

const relatorio = new Arquivo("relatorio.pdf")
const foto = new Arquivo("foto.jpg")
const video = new Arquivo("video.mp4")

const documentos = new Pasta("Documentos")
documentos.adicionar(relatorio)

const imagens = new Pasta("Imagens")
imagens.adicionar(foto)

const midias = new Pasta("Mídias")
midias.adicionar(video)

const principal = new Pasta("Principal")

principal.adicionar(documentos)
principal.adicionar(imagens)
principal.adicionar(midias)

principal.exibir()