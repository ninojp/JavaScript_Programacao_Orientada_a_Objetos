// No caso o User foi escrito com letra maiúscula propositalmente para indicar uma classe
function User(paramNome, paramEmail){
    this.Nome = paramNome,
    this.Email = paramEmail,
    this.exibirInfos = function () {
        return `${this.Nome} e ${this.Email}`
    }
}
// esta é a forma de criar um objeto, usando um construtor
// const novoUser = new User('Nino', 'Meu@eamil.com');
// console.log(novoUser.exibirInfos());

// usando um método para invocar(chamar) um abjeto protótipo para dentro de um novo abjeto a ser criado
function Admin(paramRole){
    User.call(this, 'Julian', 'ju@email.com');
    this.Role = paramRole || 'Estudante';
}
// Estamos Criando um novo objeto, passando para dentro do protótipo.Admin
//as propriedades do protótipo.User
Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin');
console.log(novoUser.exibirInfos());
console.log(novoUser.Role);
//-------------------------------------------------------------------------------

const usuario = {
    init: function(nome, email){
        this.nome=nome,
        this.email=email
    },
    exibiInfo: function (){
        return this.nome
    }
}
const novoUsuario = Object.create(usuario);
novoUsuario.init('NinoJP', 'meu@gmail.com')
console.log(novoUsuario.exibiInfo());
// console.log(novoUsuario.exibirinfo('NinoJP'));
// console.log(usuario.isPrototypeOf(novoUsuario));
//===================================================================================

// Uma factory function (“função fábrica”) é como chamamos,
//em JavaScript, uma função que retorna um objeto.
// As factory functions são diferentes das funções construtoras.
// No caso da factory function não há perda de contexto na execução dos métodos internos.
function criaUser(nome, email) {
    return {
        nome,
        email,
        exibeInfos() {
        return `${nome}, ${email}`
        }
    }
}
const newUser = criaUser('Rodrigo', 'r@r.com')
console.log(newUser)
console.log(newUser.exibeInfos())
// Veja que, um pouco diferente do que foi feito na aula, não se trata de um objeto literal
//mas sim uma função que retorna (através da palavra-chave return) um objeto.
// A função acima, quando executada com os parâmetros necessário, vai retornar um objeto
//com duas propriedades (nome e email) e um método interno (exibeInfos()):

