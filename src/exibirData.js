import chalk from "chalk";

console.log(chalk.blue('utilizando a chamada de função diretamente'));
let dataEHora = Date() // utilizando a chamada de função diretamente
console.log(dataEHora)
 // Mon Jan 31 2022 23:44:05 GMT-0300 (Brasilia Standard Time)
console.log(typeof dataEHora)
 // string

// Agora o método Date() para recuperar a informação, você agora crie uma instância do objeto Date.
console.log(chalk.blue('Agora crie uma instância do objeto Date'));
let dataEHora2 = new Date() // utilizando o construtor do objeto Date
console.log(dataEHora2)// 2022-02-01T02:46:51.517Z
console.log(typeof dataEHora2)// object
// A informação então recuperada é a mesma mas os tipos são diferentes.
// Quando utilizamos um construtor, também temos acesso a todos os métodos do objeto Date.

// Agora utilizamos o método getDate(), que já existe em qualquer objeto criado a partir de Date(),
// para obter o dia do mês.
console.log(chalk.blue('Agora utilizamos o método getDate()'));
let dataComConstrutor = new Date()
let Ano = dataComConstrutor.getFullYear()
let Mes = dataComConstrutor.getMonth()
let Dia = dataComConstrutor.getDay()
let Horas = dataComConstrutor.getHours()
let Minutos = dataComConstrutor.getMinutes()
let Segundos = dataComConstrutor.getSeconds()
let data1 = dataComConstrutor.getDate()
console.log(`O hoje é: ${Dia} de ${Mes} de ${Ano} e São: ${Horas}:${Minutos}:${Segundos} - getDate(${data1})`);
// .getMillisseconds()
// .getSeconds()
// .getMinutes()
// .getHours()
// .getDay()
// .getMonth()
// .getFullYear()

// vemos que uma data gerada através da chamada da função Date() diretamente não pode acessar
//os demais métodos do objeto Date
console.log(chalk.blue('através da chamada da função Date() diretamente não pode acessar'));
// let dataFuncao = Date()
// let data2 = dataFuncao.getDate()
 //TypeError: dataFuncao.getDate is not a function
