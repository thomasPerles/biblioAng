import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpruntLivreModel } from 'src/app/class/emprunt-livre-model';
import { LivreExemplaireModel } from 'src/app/class/livre-exemplaire-model';
import { NotificationUtilisateur } from 'src/app/class/notification-utilisateur';
import { UtilisateurModel } from 'src/app/class/utilisateur-model';

@Component({
  selector: 'app-livre-emprunt-form',
  templateUrl: './livre-emprunt-form.component.html',
  styleUrls: ['./livre-emprunt-form.component.css']
})
export class LivreEmpruntFormComponent implements OnInit {

  isSave: boolean = true;
  empruntLivre!: EmpruntLivreModel;
  exemplaires: LivreExemplaireModel[] = [];

  rangeDates!: Date[];
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>;
  invalidDays!: Array<number>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.empruntLivre = new EmpruntLivreModel();
    this.empruntLivre.utilisateur = new UtilisateurModel(0, "toto");
    this.exemplaires = [
      new LivreExemplaireModel(0, 0, "Bibliothèque de Nice", "Disponible"),
      new LivreExemplaireModel(1, 0, "Bibliothèque de Antibes", "En prêt", new Date(2023, 3, 1)),
      new LivreExemplaireModel(2, 0, "Bibliothèque de Sophia-Antipolis", "Exclu temporairement, En attente de retour")
    ];
    this.empruntLivre.exemplaire = this.exemplaires[0];
  }

  ngOnInit() {
    let today = new Date();
    this.minDate = new Date();

    let invalidDate1 = new Date();
    invalidDate1.setDate(today.getDate() + 7);
    let invalidDate2 = new Date();
    invalidDate2.setDate(today.getDate() + 8);
    let invalidDate3 = new Date();
    invalidDate3.setDate(today.getDate() + 9);
    this.invalidDates = [invalidDate1, invalidDate2, invalidDate3];
    this.invalidDays = [0, 6];
  }

  validerFormulaire() {
    const message: string = `L'utilisateur ${this.empruntLivre.utilisateur.pseudo} a réservé l'exemplaire de la ${this.empruntLivre.exemplaire.bibliotheque} du ${this.empruntLivre.dateDebut} au ${this.empruntLivre.dateFin}`;
    NotificationUtilisateur.notifier(message);
    this.router.navigate(['livres']);
  }

  annulerFormulaire() {
    this.router.navigate(['livres']);
  }

}
