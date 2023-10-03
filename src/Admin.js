import User from "./User.js";
export default class Admin extends User{
    constructor(pNome, pEmail, pNascimento, pRole='Admin', pAtivo=true) {
        super(pNome, pEmail, pNascimento, pRole, pAtivo) 
    }
    criarAnime(codnome, titulo) {
        return `O Anime ${codnome} com Titulo ${titulo}`;
    }
}
