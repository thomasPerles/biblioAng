import { ISupportMultimediaModel } from "../interface/isupport-multimedia-model";

export class LivreModel implements ISupportMultimediaModel {

    id!: number;
    titre?: string;
    auteur?: string;
    dateDePublication?: Date;
    nombreDePages?: number;

    constructor();
    constructor(id: number, titre: string, auteur: string, dateDePublication: Date, nombreDePages: number);
    constructor(id: number = 0, titre: string = "", auteur: string = "", dateDePublication: Date = new Date(), nombreDePages: number = 0) {
        this.id = id;
        this.titre = titre;
        this.auteur = auteur;
        this.dateDePublication = dateDePublication;
        this.nombreDePages = nombreDePages;
    }

}
