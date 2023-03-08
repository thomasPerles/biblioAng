import { UtilisateurModel } from "../class/utilisateur-model";

export interface IEmpruntModel {

    id: number;
    utilisateur: UtilisateurModel;
    dateDebut?: Date;
    dateFin?: Date;
    dateRetour?: Date;

}
