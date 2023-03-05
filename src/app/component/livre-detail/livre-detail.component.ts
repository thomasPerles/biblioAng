import { Component, OnInit } from '@angular/core';
import { AvisModel } from 'src/app/class/avis-model';
import { LivreDetailModel } from 'src/app/class/livre-detail-model';
import { LivreExemplaireModel } from 'src/app/class/livre-exemplaire-model';
import { LivreModel } from 'src/app/class/livre-model';
import { UtilisateurModel } from 'src/app/class/utilisateur-model';

@Component({
  selector: 'app-livre-detail',
  templateUrl: './livre-detail.component.html',
  styleUrls: ['./livre-detail.component.css']
})
export class LivreDetailComponent implements OnInit {

  livreDetail?: LivreDetailModel;
  noteGenerale: number = 0;
  livresDuMemeAuteur: LivreModel[] = [];


  ngOnInit(): void {
    const livre = new LivreModel(0, "Les fourmis : roman", "Bernard Werber", new Date(1991), 351);
    const sections: string[] = ["Adulte"];
    const classifications: string[] = ["Romans"];
    const avis: AvisModel[] = [
      new AvisModel(0,0, new Date(2020,0,1,10,13), "Marrant", "Le livre est super marrant et il fait passé super bien le temps . Je conseille.", 4, new UtilisateurModel(0, "Tom")),
      new AvisModel(1,0, new Date(2021,1,2,17,49), "Sympa", "Très facile à lire. Je recommande !", 4, new UtilisateurModel(1, "Ju")),
      new AvisModel(2,0, new Date(2022,2,3,7,6), "Génial", "J'ai adoré l'histoire, vivement la suite !", 5, new UtilisateurModel(2, "Rob"))
    ];
    const exemplaires: LivreExemplaireModel[] = [
      new LivreExemplaireModel(0, 0, "Bibliothèque de Nice", "Disponible"),
      new LivreExemplaireModel(1, 0, "Bibliothèque de Antibes", "En prêt", new Date(2023,3,1)),
      new LivreExemplaireModel(2, 0, "Bibliothèque de Sophia-Antipolis", "Exclu temporairement, En attente de retour")
    ];
    this.livreDetail = new LivreDetailModel(livre, "Livre", "Werber, Bernard (1961-....). Auteur", "A. Michel. Paris", "Livre", "français", sections, "2-226-05257-7", classifications, avis, exemplaires);

    this.noteGenerale = 5;

    this.livresDuMemeAuteur = [
      new LivreModel(1, "Le jour des fourmis", "Bernard Werber", new Date(1992), 463),
      new LivreModel(2, "La révolution des fourmis", "Bernard Werber", new Date(1996), 315),
      new LivreModel(3, "Le livre du voyage", "Bernard Werber", new Date(1997), 127),
      new LivreModel(4, "L'arbre des possibles", "Bernard Werber", new Date(2003), 269),
      new LivreModel(5, "Troisième humanité", "Bernard Werber", new Date(2012), 587),
      new LivreModel(6, "La boîte de Pandore", "Bernard Werber", new Date(2018), 545),
      new LivreModel(7, "Demain les chats", "Bernard Werber", new Date(2016), 307),
      new LivreModel(8, "Sa majesté des chats", "Bernard Werber", new Date(2019), 456)
    ];
  }

}
