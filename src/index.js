import chalk from "chalk";
import User from "./User.js";
import Admin from "./Admin.js";
import Gerente from "./Gerente.js";

// User
console.log(chalk.blue('Instânciando um objeto através de uma classe(User)'));
const novoUser = new User('Nino', 'JP', 'sem@nada.com', '1981-04-25');
console.log(novoUser);
console.log(novoUser.exibirInfos());
// console.log(novoUser.exibirInfos());
// console.log(chalk.blue('User.prototype.isPrototypeOf(novoUser)'));
// console.log(User.prototype.isPrototypeOf(novoUser));
// novoUser.#Nome = 'NinoJP';// Erro, a propriedade #Nome esta privada

// Testando a implementação do Nome e Sobre Nome
console.log(chalk.blue('Testando a implementação do Nome e Sobre Nome'));
const novoUser2 = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser2.Nome) //'Juliana'
novoUser2.Nome = 'Juliana Silva Souza'
console.log(novoUser2.Nome) //'Juliana'
console.log(novoUser2.sobreNome) //'Silva Souza'

// Admin
console.log(chalk.blue('Instânciando um objeto através de uma classe(Admin)'));
const novoAdmin = new Admin('Rodrigo', 'Vieira', 'nada@sem.com', '2023-10-02');
console.log(novoAdmin.Nome);
// novoAdmin.Nome = ''; //Apenas para induzir o erro
// console.log(novoAdmin.Nome);
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.nomeAdmin());
// console.log(novoAdmin.criarAnime('.Hack//', 'Dot Hack'));

// Gerente
// console.log(chalk.blue('Instânciando um objeto através de uma classe(Gerente)'));
// const novoGerente = new Gerente('Ed', 'gerir@gmail.com', '2023-10-02');
// console.log(novoGerente);
// console.log(novoGerente.exibirInfos());
// console.log(novoGerente.editaAnime('.//Hack', 'Sim'));