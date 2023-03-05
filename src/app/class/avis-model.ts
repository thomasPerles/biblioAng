import { UtilisateurModel } from "./utilisateur-model";

export class AvisModel {
    
    id!: number;
    idLivre?: number;
    dateDePublication?: Date;
    titre?: string;
    contenu?: string;
    note?: number;
    utilisateur?: UtilisateurModel;
    
    constructor();
    constructor(id: number, idLivre: number, dateDePublication: Date, titre: string, contenu: string, note: number, utilisateur: UtilisateurModel);
    constructor(id: number = 0, idLivre: number = 0, dateDePublication: Date = new Date(), titre: string = "", contenu: string = "", note: number = 0, utilisateur: UtilisateurModel = new UtilisateurModel()) {
        this.id = id;
        this.idLivre = idLivre;
        this.dateDePublication = dateDePublication;
        this.titre = titre;
        this.contenu = contenu;
        this.note = note;
        this.utilisateur = utilisateur;
    }
}
