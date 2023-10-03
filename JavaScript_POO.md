# Curso Alura - JavaScript: Programação Orientada a Objetos

### Paradigma orientado a objetos - POO (Programação Orientada a Objetos)
 - Qual é a motivação e a base conceitual da programação orientada a objetos, que é abstrair modelos a partir de conceitos da vida real e estruturar a forma como o programa é desenvolvido a partir destes modelos;
 - Quais são as características de um objeto literal: um tipo de dado composto de pares de chave/valor, com valores que podem ser tanto dados primitivos quanto arrays e outros objetos (também chamados de propriedades) e funções que dão comportamento ao objeto (também chamados de métodos);
 - Sobre o princípio de usar modelos (ou classes) para criar cópias (ou instâncias) de um objeto e como isso ajuda a reaproveitar código;

**Conclusão da Aula 02** 
 - O que é a palavra-chave this e sua importância na manipulação de objetos com JavaScript, uma vez que o this representa o contexto em que determinada função ou método será executada, e como este contexto pode ser identificado e modificado utilizando os métodos bind(), call() e apply();
 - Como funciona a criação de objetos em JavaScript com o modelo de protótipo, que é a forma nativa do JavaScript trabalhar com o conceito de orientação a objetos conhecido como “herança”, quando objetos recebem propriedades e métodos de outros;
 - Como acessar as propriedades prototype e __proto__ e, através delas, identificar a cadeia de protótipos desde o nível mais baixo, normalmente um objeto do próprio tipo de dado, como Object ou Function;
 - As duas formas (anteriores às classes) que o JavaScript utiliza para criação de objetos a partir de modelos: Object.create() e funções construtoras com new; sendo o primeiro mais indicado para se trabalhar com protótipos utilizando as melhores práticas e o segundo mais próximo à sintaxe de classes.

## JavaScript: Programação Orientada a Objetos, Aula 03, video 1 - Resumo
Nesta aula, o instrutor aborda o conceito de classes em programação orientada a objetos em JavaScript. Ele explica que as classes são uma sintaxe comum para trabalhar com orientação a objetos e são uma camada de abstração em cima do modelo de protótipos. O instrutor mostra a sintaxe básica para criar uma classe, definir um construtor de classe e criar métodos dentro da classe. Ele também demonstra como instanciar um objeto a partir da classe e chamar métodos. O instrutor destaca a importância de entender o modelo de herança de protótipos, mesmo ao utilizar classes em JavaScript.  

## JavaScript: Programação Orientada a Objetos, Aula 03, video 2 - Resumo
Nesta aula, o instrutor aborda o conceito de herança de classes em JavaScript. Ele explica que a herança permite reutilizar código e tornar as entidades do sistema mais coesas. O instrutor mostra como configurar o projeto para usar a nova sintaxe de módulos do ECMAScript, criando um arquivo de configuração chamado "package.json" e adicionando a propriedade "type" com o valor "module". Em seguida, ele exporta a classe "User" e a importa em outro arquivo chamado "Admin.js". A classe "Admin" herda da classe "User" utilizando a palavra-chave "extends" e possui um construtor que recebe as mesmas propriedades. O instrutor destaca que os objetos criados a partir da classe "Admin" terão acesso aos métodos da classe "User".

### CommonJS, CJS - EcmaScript Modules, ESM
Quando trabalhamos com NodeJS, é comum usarmos arquivos diferentes para separar e organizar o código. Cada arquivo .js é um módulo independente e suas funções, variáveis e classes não são compartilhados com o restante do código, a não ser quando são explicitamente exportados e importados em outros módulos.  
O JavaScript, em seus diversos interpretadores, faz a importação/exportação de módulos de duas formas, usando a sintaxe CommonJS ou CJS ou a sintaxe EcmaScript Modules, ou ESM. Vamos ver exemplos de ambas as formas.  
**CommonJS, ou CJS**   
Até a versão 13, a função que o NodeJS utiliza por padrão para importar módulos em um arquivo é require(). Os módulos podem importar e exportar todas as funções declaradas no arquivo ou apenas algumas, de acordo com o necessário. Exemplos abaixo  
```javascript
// EXPORTAR
module.exports = function soma(num1, num2) {
 return num1 + num2;
};
// outra forma de Exportar
function soma(num1, num2) {
 return num1 + num2;
}
function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}
// exportar apenas a função que precisa ser executada a partir de outra parte do código
module.exports = multiplica;
module.exports = soma;
// caso seja necessário exportar mais de uma função
module.exports = { multiplica, soma };

// IMPORTAR 
// não é necessário colocar a .extensão
const soma = require('./caminho/arquivo');
// caso seja necessário importar mais de uma função
const { multiplica, soma } = require('./caminho/arquivo');
```

**EcmaScript Modules, ou ESM**  
Quando utilizamos o ESM, o mesmo processo de exportação de módulos é feito com a sintaxe export ou export default e a importação com a sintaxe import <nomeModulo> from ‘./caminho/arquivo.js’.

Esta outra forma de lidar com a importação e exportação de módulos veio com o famoso ES6 ou JS2015 e foi aos poucos sendo implementada para funcionar nativamente nos navegadores com a ajuda de bundlers como o WebPack, que fazem a “tradução” de métodos do JavaScript mais moderno para garantir retrocompatibilidade.  
```javascript
// EXPORTAR
export function soma(num1, num2) {
 return num1 + num2;
}
export function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}
// Para exportar somente uma função, export  default(padrão):
// No caso esta linha vai no final do código e não se usa o export antes do function
export default multiplica;
// Para exportar mais de uma função
export { multiplica, soma };

// IMPORTAR
import soma from './caminho/arquivo.js';
// Para importar mais de uma função
import { soma, multiplica } from './caminho/arquivo.js';
// É possível também importar de uma só vez todo o objeto exportado:
import * as operacoes from './caminho/arquivo.js';
```  
> Importante: para utilizar a sintaxe ESM com NodeJS é preciso incluir, no arquivo package.json, a propriedade ”type”: “module” e sempre incluir a extensão do arquivo .js nos caminhos de importação - por exemplo import soma from ‘./caminho/arquivo.js’;

> Existe uma convenção no uso de ESM em projetos NodejS, que é utilizar a extensão .mjs para distinguir quais arquivos são módulos, continuando com a extensão .js para os arquivos que não exportam módulos.

Conclusão
O sistema CJS (CommonJS) foi desenvolvido para funcionar como o sistema de exportação/importação de módulos do NodeJS.
O ESM (EcmaScript Modules) foi desenvolvido para que o JavaScript tivesse nativamente seu próprio sistema de módulos - estamos falando do JavaScript interpretado nos navegadores.
O NodeJS implementou o suporte ao ESM a partir da versão 13.


## JavaScript: Programação Orientada a Objetos, Aula 03, video 3 - Resumo
Nesta aula, o instrutor explicou como adicionar métodos em classes JavaScript. Ele mostrou que um método é uma função executada no contexto de um objeto e que, ao usar classes, não é necessário usar a palavra-chave "function". O instrutor criou um método chamado "criarCurso" na classe Admin, que recebe dois parâmetros e retorna uma string informando que o curso foi criado. Em seguida, ele mostrou como estender uma classe, criando a classe Docente que herda da classe User. O instrutor adicionou um novo método chamado "aprovaEstudante" na classe Docente, que recebe dois parâmetros e retorna uma string informando que o estudante foi aprovado no curso. Ele destacou que a aula abordou a sintaxe de classes em JavaScript, herança e como aproveitar métodos e propriedades de uma superclasse para criar subclasses.

## Strict mode
[Strict mode - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)  [Strict mode - Artigo alura](https://www.youtube.com/watch?v=-iiSEKTotyg)  
O modo estrito do JavaScript serve para impedir que alguns comportamentos do JavaScript causem “falhas silenciosas” (transformando em erros que são lançados pelo interpretador) e corrigir alguns outros que podem induzir a bugs potenciais e comportamentos inesperados.  
JavaScript é uma linguagem que não tem breaking changes. Ou seja, não é possível corrigir certos comportamentos não desejados retirando o código das novas versões, pois há o risco de quebrar código que já está rodando em sites e aplicações na internet. O modo estrito é uma forma de ajudar a contornar alguns destes comportamentos sem que o código “não estrito” deixe de funcionar.

## [Métodos, static](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/static)
Quando criamos uma classe, é possível designar que determinados métodos sejam estáticos. Ou seja, estes métodos não são inicializados quando criamos uma nova instância de classe (usando new), mas sim a partir da própria classe.
```javascript
class User {
  constructor(nome, email, cpf) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
  }

  static exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.cpf}`
  }
}
console.log(User.exibirInfos())
// Exibe, undefined, undefined, undefined
```
agora o método é static e é executado a partir da própria classe, e não de uma instância dela. Porém, como o método depende de informações recebidas do construtor e isso não ocorreu (uma vez que não criamos uma instância e nem passamos os dados necessários), recebemos undefined para cada propriedade.  
Os métodos estáticos são normalmente utilizados para chamadas de métodos internos de frameworks e bibliotecas, ou em qualquer caso que a classe não dependa de instâncias específicas.


**Conclusão da Aula 03** - Nessa aula, você aprendeu:
O que são e como funcionam as classes, elementos essenciais para se trabalhar com orientação a objetos em grande parte das linguagens de programação voltadas para este paradigma. As classes fornecem um modelo para a criação de cópias (instâncias) de objetos que compartilham dos mesmos tipos de propriedades e métodos;
O conceito de herança de classe, também importante para se trabalhar com orientação a objetos, como criar subclasses que herdam propriedades e métodos de uma superclasse e como reaproveitar estas propriedades e métodos da superclasse através da função super();
Como uma subclasse pode ter propriedades e métodos próprios, além dos recebidos da superclasse, e como declarar isso no código criando novos métodos;
A praticar a sintaxe de classe com JavaScript, criando classes, subclasses, propriedades, construtores e métodos.


# Encapsulamento - Aula 04

## Propriedades Públicas e Privadas
> Propriedades e métodos públicos são aqueles que podem ser acessados a partir de qualquer parte do código; os privados são acessados apenas “por dentro” da classe.
> Até recentemente, o JavaScript não tinha a opção de usar atributos privados com #. Ao invés disso, atributos privados tinham um _ como prefixo como convenção

## JavaScript: Programação Orientada a Objetos, Aula 04, video 1 - Resumo
Nesta aula, o instrutor aborda o conceito de encapsulamento na programação orientada a objetos. O encapsulamento consiste em "esconder" os atributos de uma classe, tornando-os inacessíveis fora dela. Isso é feito para evitar o uso incorreto dos atributos ou a alteração indevida de informações sensíveis. No JavaScript, os atributos privados são uma funcionalidade recente e estão sendo implementados pelos interpretadores. O uso de atributos privados e métodos assessores permite controlar o acesso e a manipulação dos atributos de forma adequada, garantindo a segurança e integridade dos dados.

## JavaScript: Programação Orientada a Objetos, Aula 04, video 2 - Resumo
Nesta aula, o instrutor abordou o tema do encapsulamento em JavaScript, focando nos métodos privados. Ele explicou que é possível definir métodos que não podem ser acessados ou modificados fora da classe. O instrutor exemplificou a criação de um método privado chamado "montaObjUser" dentro da classe "user" e mostrou como testá-lo. Ele ressaltou que os métodos privados existem para proteger lógicas internas da classe e só podem ser acessados por outros métodos da própria classe. O instrutor sugeriu uma refatoração no método público "exibirInfos" para que ele chame o método privado "montaObjUser" e retorne apenas as informações que devem ser expostas externamente. Ele também mencionou que as subclasses "Admin" e "Docente" herdam da classe "user" e que é possível utilizar as propriedades privadas dentro dessas subclasses. No entanto, ele ressaltou que é necessário utilizar métodos acessores para dar acesso controlado às propriedades privadas.

## JavaScript: Programação Orientada a Objetos, Aula 04, video 3 - Resumo
Nesta aula, o professor aborda o conceito de encapsulamento na programação orientada a objetos. Para isso, são utilizadas funções específicas chamadas de propriedades acessoras, também conhecidas como getters e setters.  
O professor explica que o primeiro passo é criar um getter para a propriedade "nome" na classe "user". Essa função getter será compartilhada por todos os tipos de usuário, permitindo que o nome de cada usuário seja acessado sem prejudicar a propriedade em si. A sintaxe para criar um getter é utilizar a palavra-chave "get" seguida pelo nome da propriedade que se deseja acessar.  
É necessário criar um getter para cada propriedade que se deseja acessar externamente. Essa é uma prática recomendada de orientação a objetos, pois cada método deve ter uma única responsabilidade. Além disso, essa abordagem evita o acoplamento excessivo entre os métodos e facilita a reutilização de código.  
Mesmo que não haja propriedades privadas na classe, ainda é útil utilizar os assessores, como os getters, para ter um único ponto de acesso às propriedades e facilitar o debug do código. Além dos getters, existem também os setters, que são utilizados para modificar as propriedades. Esses setters serão abordados em detalhes posteriormente.


## JavaScript: Programação Orientada a Objetos, Aula 04, video 4 - Resumo
Nesta aula, o instrutor explica o conceito de getters e setters em programação orientada a objetos. Ele mostra que o getter é utilizado para obter um dado encapsulado em uma classe, enquanto o setter é utilizado para definir e alterar propriedades privadas de forma segura. O instrutor destaca a importância dos setters para proteger propriedades de alterações críticas e menciona que é possível adicionar lógica de validação dentro do setter. Além disso, ele esclarece a diferença entre o uso do construtor e do setter. Os getters e setters são essenciais para o encapsulamento em programação.


**Conclusão da Aula 04** - Nessa aula, você aprendeu:
O conceito de encapsulamento, que é a ação (ou ações) de “esconder” atributos de uma classe, para evitar acesso indevido a atributos importantes ou dados sensíveis, ou que métodos sejam utilizados de forma errada;
Como utilizar a sintaxe de atributos privados do JavaScript, através do prefixo #, para que a própria linguagem de programação faça a “segurança” da classe, impedindo o acesso externo a propriedades e métodos assinalados como privados com este prefixo;
A criar métodos assessors para “expôr” e permitir acesso e modificação de propriedades de forma controlada e restrita, através do uso das funções get para retornar dados específicos e set para definir dados específicos.



# Polimorfismo - Aula 05

## JavaScript: Programação Orientada a Objetos, Aula 05, video 1 - Resumo
**polimorfismo**  
Nesta aula, aprendemos sobre o conceito de polimorfismo na programação orientada a objetos. O polimorfismo se refere à capacidade de diferentes subclasses de uma classe utilizarem um método com o mesmo nome e assinatura, mas com comportamentos internos diferentes. Isso significa que, mesmo tendo o mesmo nome, o método pode ter um comportamento específico para cada subclasse. O polimorfismo é uma técnica importante para criar código mais flexível, reutilizável e de fácil manutenção.


## JavaScript: Programação Orientada a Objetos, Aula 05, video 2 - Resumo
**princípios SOLID da orientação a objetos**
Nesta aula, o instrutor discute os princípios SOLID da orientação a objetos. SOLID é um conjunto de padrões de design de código desenvolvido para a orientação a objetos. Os princípios SOLID são:
 - Princípio da Responsabilidade Única (SRP): cada módulo, classe ou método deve ter apenas um motivo para mudar, ou seja, uma única responsabilidade.
 - Princípio do Aberto/Fechado (OCP): uma classe deve estar aberta para extensão, mas fechada para modificação, permitindo adicionar novas funcionalidades sem modificar o código existente.
 - Princípio da Substituição de Liskov (LSP): uma subclasse deve ser capaz de substituir sua superclasse sem quebrar o funcionamento do programa, mantendo os contratos estabelecidos pela superclasse.
 - Princípio da Segregação de Interface (ISP): os clientes não devem ser forçados a depender de interfaces que eles não utilizam, evitando a implementação de coisas desnecessárias.
 - Princípio da Inversão de Dependência (DIP): os módulos de nível superior devem depender de abstrações, não de implementações específicas, permitindo maior flexibilidade e facilidade de manutenção.
Esses princípios são fundamentais para criar código limpo, modular e de fácil manutenção na orientação a objetos.


**Interfaces**  
Como vimos até o momento, a linguagem JavaScript possui muitas particularidades e uma delas é sua própria abordagem para implementação do paradigma de Programação Orientada a Objetos (muito diferente de Java, por exemplo).
Depois que as classes começaram a fazer parte do JavaScript com o lançamento do ES6, outras necessidades surgiram e elementos importantes foram requisitados pela comunidade dev. Um deles é a aplicação do conceito de interfaces.
Então atualmente 02/10/2023 o JavaScript pelo que eu entendi NÃO tem suporte as interfaces, diferente do TypeScript.


**Conclusão da Aula 05** - Nessa aula, você aprendeu:
Que chamamos de polimorfismo a alteração de um método de uma classe para que, na subclasse, o método tenha a mesma assinatura porém um comportamento diferente do método executado no contexto da superclasse;
Que existe uma série de princípios de design de código pensados para a programação orientada a objetos, que estão compilados no acrônimo SOLID.