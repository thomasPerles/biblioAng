export class UtilisateurModel {
    
    id!: number;
    pseudo?: string;
    
    constructor();
    constructor(id: number, pseudo: string);
    constructor(id: number = 0, pseudo: string = "") {
        this.id = id;
        this.pseudo = pseudo;
    }
}
