import chalk from "chalk";
//Herança de protótipo
console.log(chalk.blue('Herança de protótipo'));
const user = {
    nome: "usuario1",
    email: "email@usuario1",
    nascimento: "21-04-25",
    role: "Admin",
    ativo: true,
    exibirInfo: function (){
        console.log(this.nome, this.email)
    }
}
user.exibirInfo();
//--------------------------------------------------------------------------------
// Para fazer a passagem do método exibirInfo() para dentro de uma nova variável
// const exibir = user.exibirInfo; //NÃO se usa os parenteses do método
// é a mesma coisa q acima
console.log(chalk.blue('bind(), prende o valor de this a um determinado contexto'));
const exibir =  function() {
    console.log(this.nome)
}
// bind()
// O BIND é usado para LIGAR ou prender o valor de this a um determinado contexto (objeto). 
const exibirNome = exibir.bind(user);
exibirNome(); //Exibe o nome, user.nome
// exibir();// Exibe ERRO
// Importante saber que se passa uma função para dentro de uma variável
// É Criado uma NOVA função, é não uma referência da anterior.

// call()
// O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto
//do this. Ou seja, é possível atribuir um this diferente do contexto atual ao executar a função.
console.log(chalk.blue('call(), executa a função passando valores e parâmetros específicos'));
function exibeInfos() {
    console.log(this.nome, this.email)
}
const user2 = {
nome: 'Mariana',
email: 'm@m.com'
}
exibeInfos.call(user2)
user.exibirInfo.call(user2)//usando um método de outro objeto
//------------------------------------------------------------------------------------------
//Fazendo com que a função seja executada em determinado contexto, mesmo após ser instanciada:
console.log(chalk.blue('call(), Fazendo com que a função seja executada em determinado contexto'));
function User(nome, email) {
    this.nome = nome
    this.email = email
    this.exibeInfos = function(){
    console.log(this.nome, this.email)
} }
const newUser = new User('mariana2', 'm2@m.com')
const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
}
newUser.exibeInfos() //mariana2 m2@m.com
newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com
//-----------------------------------------------------------------------------------------------

console.log(chalk.blue('call(), Se quiséssemos vincular os dados da mensagem a um objeto'));
// Se quiséssemos vincular os dados da mensagem a um objeto com dados de usuários,
// podemos usar call() passando como primeiro parâmetro o contexto a ser considerado como this
//(no caso, objeto user) e a partir do segundo parâmetro definimos quais os argumentos.
function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
const user3 = {
nome: 'Mariana3',
email: 'm3@m.com',
executaFuncao: function(fn) {
    fn.call(user, this.nome, this.email)
} }
// Nesse caso, a função que será executada também está sendo passada como parâmetro de executaFuncao
// e usamos call() para “chamar” a função com um contexto (this) específico e também argumentos específicos.
user3.executaFuncao(exibeMensagem) //usuário: Mariana3, email m3@m.com
//----------------------------------------------------------------------------------------------

// apply(), O método apply() funciona de forma semelhante ao call(), 
//porém recebe a lista de argumentos em um array:
console.log(chalk.blue('O método apply()'));
function exibeMensagem2(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
const user4 = {
nome: 'Mariana4',
email: 'm4@m.com',
executaFuncao2: function(fn) {
    fn.apply(user, [this.nome, this.email])
}}
// Usando arrays, é possível passar os argumentos via variável ou até mesmo usando a 
//propriedade arguments que existe internamente em todo objeto.
user4.executaFuncao2(exibeMensagem2) //usuário: Mariana, email m@m.com
//=================================================================================================

//Herença de protótipo
console.log(chalk.blue('Object.setPrototypeOf(objRecebe, ojbDoador)'));
const admin = {
    nome: "administrador",
    email: "admi@sem.com",
    role: "admin",
    //aqui a função foi declarada de forma diferente, mas não foi explicado o por que
    criarCurso() {
        console.log('Curso criado!')
    }
}
// usando um método do Object.setPrototypeOf(objRecebe, ojbDoador), para definir o um protótipo
// no caso objDoador será usado como PROTÓTIPO e o objRecebe herda as suas propriedades.
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfo();
