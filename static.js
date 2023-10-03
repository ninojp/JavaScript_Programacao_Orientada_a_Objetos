// Quando criamos uma classe, é possível designar que determinados métodos sejam estáticos. 
// Ou seja, estes métodos não são inicializados quando criamos uma nova instância de classe (usando new),
//mas sim a partir da própria classe.
class User {
    constructor(nome, email, cpf) {
      this.nome = nome
      this.email = email
      this.cpf = cpf
    }
    exibirInfos() {
      return `${this.nome}, ${this.email}, ${this.cpf}`
    }
  }
const novoUser = new User('Carol', 'c@c.com', '12312312312')
console.log(novoUser.exibirInfos()) //Carol, c@c.com, 12312312312
//  Se tentarmos executar o método sem associá-lo a nenhuma instância da classe, recebemos um erro:
console.log(User.exibirInfos())
//TypeError: User.exibirInfos is not a function

// Agora vamos refatorar a classe, declarando exibirInfos() como sendo um método estático:
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
//  Não recebemos mais um erro, pois agora o método é static e é executado 
//a partir da própria classe, e não de uma instância dela.
console.log(User.exibirInfos())
//undefined, undefined, undefined

//Mantivemos o método exibirInfos() como estava e criamos um novo método, estático, chamado exibeNome().
class User {
    constructor() {
      this.nome = 'Camila'
      this.email = 'c@c.com'
      this.cpf = '12312312312'
    }
    exibirInfos() {
      return `${this.nome}, ${this.email}, ${this.cpf}`
    }
    static exibeNome(nome) {
      return nome
    }
  }
const novoUser2 = new User('Carol', 'c@c.com', '12312312312')
const nomeUser = novoUser2.nome
console.log(User.exibeNome(nomeUser)) //Camila
// Na realidade, como exibeNome() é um método estático, 
//é possível executá-lo passando qualquer nome como parâmetro:
console.log(User.exibeNome('Jaqueline')) //Jaqueline
// Os métodos estáticos são normalmente utilizados para chamadas
//de métodos internos de frameworks e bibliotecas, ou em qualquer caso 
//que a classe não dependa de instâncias específicas.
  


  