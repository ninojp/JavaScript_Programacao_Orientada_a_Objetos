// teste
class User {
    #nome
    #email
    #cpf
        constructor(nome, email, cpf) {
        this.#nome = nome
        this.#email = email
        this.#cpf = cpf
    }
    get nome() {
        return this.nome //O Erro está aqui, deveria ser #nome
    }
    }
    const novoUser = new User('Carol', 'c@c.com', '12312312312')
    console.log(novoUser.nome)

// O terminal exibirá um erro do tipo RangeError: Maximum call stack size exceeded.
// Alternativa correta! Você notou que o get retorna não a propriedade #nome, mas sim nome.
// Embora sejam consideradas como variáveis diferentes pelo JavaScript, esse código irá
// resultar em um stack overflow, pois a propriedade nome sendo chamada dentro do getter get nome()
// (ambas com a mesma nomenclatura) faz com que o getter seja chamado dentro dele mesmo, 
// de forma recursiva, causando o “estouro” na pilha de processos do NodeJS.