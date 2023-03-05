import { AvisModel } from "./avis-model";
import { LivreExemplaireModel } from "./livre-exemplaire-model";
import { LivreModel } from "./livre-model";

export class LivreDetailModel {

    livre!: LivreModel;
    typeDeSupportMultimedia?: string;
    resumeAuteur?: string;
    editeur?: string;
    typeDeDocument?: string;
    langue?: string;
    sections?: string[];
    ISBN?: string;
    classifications?: string[];
    avis?: AvisModel[];
    exemplaires?: LivreExemplaireModel[];

    constructor();
    constructor(livre: LivreModel, typeDeSupportMultimedia: string, resumeAuteur: string, editeur: string, typeDeDocument: string, langue: string, sections: string[], ISBN: string, classifications: string[], avis: AvisModel[], exemplaires: LivreExemplaireModel[]);
    constructor(livre: LivreModel = new LivreModel(), typeDeSupportMultimedia: string = "", resumeAuteur: string = "", editeur: string = "", typeDeDocument: string = "", langue: string = "", sections: string[] = [], ISBN: string = "", classifications: string[] = [], avis: AvisModel[] = [], exemplaires: LivreExemplaireModel[] = []) {
        this.livre = livre;
        this.typeDeSupportMultimedia = typeDeSupportMultimedia;
        this.resumeAuteur = resumeAuteur;
        this.editeur = editeur;
        this.typeDeDocument = typeDeDocument;
        this.langue = langue;
        this.sections = sections;
        this.ISBN = ISBN;
        this.classifications = classifications;
        this.avis = avis;
        this.exemplaires = exemplaires;
    }
}
