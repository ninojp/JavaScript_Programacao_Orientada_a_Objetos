import User from "./User.js";
export default class Gerente extends User {
    constructor(pNome, pEmail, pNascimento, pRole='Gerente', pAtivo=true) {
        super(pNome, pEmail, pNascimento, pRole, pAtivo) 
    }
    editaAnime(anime, editado) {
        return `O Anime: ${anime} foi Editado? ${editado}`;
    }
}
