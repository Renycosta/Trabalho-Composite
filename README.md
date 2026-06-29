# Introdução <br>
O padrão Composite é uma abordagem de projeto estrutural que possibilita a criação de objetos dentro de arranjos em forma de árvore, permitindo que se manipule essas formações como se fossem entidades isoladas.<br>
A intenção é fazer com que tanto os objetos únicos quanto as coleções de objetos sejam gerenciados de forma semelhante.<br> 
Esse padrão é comumente aplicado em softwares que possuem estruturas organizacionais dispostas hierarquicamente em formato de árvore.

---

# Motivação <br>
Imagine um sistema que tem a função de representar arquivos e pastas de um computador.<br>
- Um Arquivo representa um objeto simples.
- Uma Pasta pode armazenar vários arquivos e até mesmo outras pastas.
Sem a implementação do padrão Composite, a aplicação deve lidar separadamente os arquivos e pastas, o que eleva o acoplamento e complica a manutenção do código. <br>

---

# Solução Proposta  <br>
O padrão Composite sugere estabelecer uma interface comum para todos os componentes da organização.
Portanto:  <br>
- Objetos simples (Leaf) realizam diretamente a função.
- Objetos compostos (Composite) contêm outros componentes e transferem as funções para suas partes.
Dessa maneira, o cliente consegue interagir com todos os elementos através de uma única interface.  <br>

---

# Estrutura do Projeto (com composite) <br>
## Descrição dos Arquivos <br>
**component.ts:** Interface responsável por definir o comportamento comum entre arquivos e pastas. <br>

**arquivo.ts (Leaf):** Representa os objetos simples da estrutura; Arquivos não podem conter outros componentes. <br>

**pasta.ts (Composite):** Representa objetos compostos; Uma pasta pode armazenar arquivos e outras pastas. <br>

**main.ts (Client)**: Responsável por montar a estrutura hierárquica e interagir com os componentes. <br>

---

# Exemplo Sem composite
Na implementação sem o Composite, a classe Pasta precisa conhecer explicitamente os tipos Arquivo e Pasta.
Consequentemente: <br>
- Há maior acoplamento entre as classes;
- Novos tipos exigem modificações na estrutura existente;
- O código torna-se menos flexível.

---

# Estrutura do Padrão Composite <br>
- **Componente:** Interface comum.
- **Leaf:** Objeto simples.
- **Composite:** Objeto capaz de armazenar outros componentes.
- **Client:** Interage apenas com a interface comum.

---

# Vantagens <br>
- Permite operar de maneira simples com organizações em camadas;  
- Diminui a dependência entre o cliente e os objetos específicos;  
- Ajuda na reoperação do código;  
- Promove a variação de formas;  
- Tornen que seja mais simples adicionar novos tipos de elementos;  
- Adere ao princípio de Abertura/Fechamento.

---

# Desvantagens <br>
- Pode tornar a interface muito genérica;
- Pode dificultar a imposição de restrições específicas para determinados componentes;
- Introduz uma camada adicional de abstração.

---

# Conclusão <br>
O padrão Composite mostrou-se adequado para representar estruturas hierárquicas, como sistemas de arquivos. <br>
Sua principal vantagem é permitir que objetos individuais e grupos de objetos sejam tratados da mesma forma, simplificando o código do cliente e reduzindo o acoplamento entre as classes. <br>
Apesar de adicionar um nível extra de abstração, seus benefícios tornam o sistema mais flexível, extensível e de fácil manutenção.
