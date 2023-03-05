export class LivreExemplaireModel {
    
    id!: number;
    idLivre?: number;
    bibliotheque?: string;
    statut?: string;
    dateDeRetour?: Date;
    
    constructor();
    constructor(id: number, idLivre: number, bibliotheque: string, statut: string);
    constructor(id: number, idLivre: number, bibliotheque: string, statut: string, dateDeRetour: Date);
    constructor(id: number = 0, idLivre: number = 0, bibliotheque: string = "", statut: string = "", dateDeRetour?: Date) {
        this.id = id;
        this.idLivre = idLivre;
        this.bibliotheque = bibliotheque;
        this.statut = statut;
        this.dateDeRetour = dateDeRetour;
    }
}
