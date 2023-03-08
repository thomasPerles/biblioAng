import { IEmpruntModel } from "../interface/iemprunt-model";
import { LivreExemplaireModel } from "./livre-exemplaire-model";
import { UtilisateurModel } from "./utilisateur-model";

export class EmpruntLivreModel implements IEmpruntModel {
    
    id!: number;
    exemplaire!: LivreExemplaireModel;
    utilisateur!: UtilisateurModel;
    dateDebut?: Date;
    dateFin?: Date;
    dateRetour?: Date;
    
}
