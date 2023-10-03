// Para ficar mais claro o entendimento usarei o P para indicar PARAMETROS
export default class User {
    #Nome//Se usa o # para definir uma propriedade PRIVADA
    #sobreNome
    #Email
    #Nascimento
    #Role
    #Ativo
    constructor(pNome, psobreNome, pEmail, pNascimento, pRole, pAtivo=true) {
        this.#Nome = pNome;
        this.#sobreNome = psobreNome;
        this.#Email = pEmail;
        this.#Nascimento = pNascimento;
        this.#Role = pRole || 'Usuário';
        this.#Ativo = pAtivo;
    }
    get Nome(){
        return `${this.#Nome} ${this.#sobreNome}`
    }
    set Nome(novoNome){
        if(novoNome === ''){
            throw new Error('Formato Inválido!');
        }
        let [Nome, ...sobreNome] = novoNome.split(" ")
        sobreNome = sobreNome.join(' ')
        this.#Nome = Nome;
        this.#sobreNome = sobreNome;
    }
    get sobreNome(){
        return this.#sobreNome;
    }
    get Email(){
        return this.#Email;
    }
    get Nascimento(){
        return this.#Nascimento;
    }
    get Role(){
        return this.#Role;
    }
    get Ativo(){
        return this.#Ativo;
    }
    exibirInfos() {
        return ` O Tipo é: ${this.Role} \n O Nome Completo é: ${this.Nome} \n O E-mail: ${this.Email} \n A Data de nascimento: ${this.Nascimento} \n A Situação: ${this.Ativo}`  
    }
}

// Exemplo criado DENTRO da classe User, para ilustrar como seria um método privado
// #montaObjUser(){
//     //o retorno esta dentro de PARENTESES pois se trata de um objeto LITERAL, a virgula também
//     return ({
//         User: this.#Nome,
//         Email: this.#Email,
//         Nascido: this.#Nascimento,
//         Role: this.#Role,
//         Ativo: this.#Ativo
//     }) }

// const objUser = this.#montaObjUser();

