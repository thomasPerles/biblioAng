export class UtilisateurModel {

    id!: number;
    pseudo?: string;
    motDePasse?: string;
    adresseElectronique?: string;
    nom?: string;
    prenom?: string;
    bibliotheque?: string;
    dateDeNaissance?: Date;
    sexe?: string;
    telephone?: string;
    adresse?: string;
    codePostal?: string;
    ville?: string;

    constructor();
    constructor(id: number, pseudo: string);
    constructor(id: number = 0, pseudo: string = "", motDePasse: string = "", adresseElectronique: string = "", nom: string = "", prenom: string = "", bibliotheque: string = "", dateDeNaissance: Date = new Date(), sexe: string = "", telephone: string = "", adresse: string = "", codePostal: string = "", ville: string = "") {
        this.id = id;
        this.pseudo = pseudo;
        this.motDePasse = motDePasse;
        this.adresseElectronique = adresseElectronique;
        this.nom = nom;
        this.prenom = prenom;
        this.bibliotheque = bibliotheque;
        this.dateDeNaissance = dateDeNaissance;
        this.sexe = sexe;
        this.telephone = telephone;
        this.adresse = adresse;
        this.codePostal = codePostal;
        this.ville = ville;
    }
}
