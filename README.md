Introdução
O padrão Composite é uma abordagem de projeto estrutural que possibilita a criação de objetos dentro de arranjos em forma de árvore, permitindo que se manipule essas formações como se fossem entidades isoladas. 
A intenção é fazer com que tanto os objetos únicos quanto as coleções de objetos sejam gerenciados de forma semelhante. 
Esse padrão é comumente aplicado em softwares que possuem estruturas organizacionais dispostas hierarquicamente em formato de árvore.

Motivação
Imagine um sistema que tem a função de representar arquivos e pastas de um computador.
  Um Arquivo representa um objeto simples.
  Uma Pasta pode armazenar vários arquivos e até mesmo outras pastas.
Sem a implementação do padrão Composite, a aplicação deve lidar separadamente os arquivos e pastas, o que eleva o acoplamento e complica a manutenção do código.

Solução Proposta
O padrão Composite sugere estabelecer uma interface comum para todos os componentes da organização.
Portanto:
  Objetos simples (Leaf) realizam diretamente a função.
  Objetos compostos (Composite) contêm outros componentes e transferem as funções para suas partes.
Dessa maneira, o cliente consegue interagir com todos os elementos através de uma única interface.

Estrutura do Projeto (com composite)
Descrição dos Arquivos
component.ts
Interface responsável por definir o comportamento comum entre arquivos e pastas.
arquivo.ts (Leaf)
Representa os objetos simples da estrutura.
Arquivos não podem conter outros componentes.
pasta.ts (Composite)
Representa objetos compostos.
Uma pasta pode armazenar arquivos e outras pastas.
main.ts (Client)
Responsável por montar a estrutura hierárquica e interagir com os componentes.

Exemplo Sem composite
Na implementação sem o Composite, a classe Pasta precisa conhecer explicitamente os tipos Arquivo e Pasta.
Consequentemente:
  Há maior acoplamento entre as classes;
  Novos tipos exigem modificações na estrutura existente;
  O código torna-se menos flexível.

Estrutura do Padrão Composite
  Componente: Interface comum.
  Leaf: Objeto simples.
  Composite: Objeto capaz de armazenar outros componentes.
  Client: Interage apenas com a interface comum.

Vantagens
  Permite operar de maneira simples com organizações em camadas;  
  Diminui a dependência entre o cliente e os objetos específicos;  
  Ajuda na reoperação do código;  
  Promove a variação de formas;  
  Tornen que seja mais simples adicionar novos tipos de elementos;  
  Adere ao princípio de Abertura/Fechamento.

Desvantagens
  Pode tornar a interface muito genérica;
  Pode dificultar a imposição de restrições específicas para determinados componentes;
  Introduz uma camada adicional de abstração.

Conclusão
O padrão Composite mostrou-se adequado para representar estruturas hierárquicas, como sistemas de arquivos.
Sua principal vantagem é permitir que objetos individuais e grupos de objetos sejam tratados da mesma forma, simplificando o código do cliente e reduzindo o acoplamento entre as classes.
Apesar de adicionar um nível extra de abstração, seus benefícios tornam o sistema mais flexível, extensível e de fácil manutenção.
