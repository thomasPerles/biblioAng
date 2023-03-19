import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpruntLivreModel } from 'src/app/class/emprunt-livre-model';
import { LivreExemplaireModel } from 'src/app/class/livre-exemplaire-model';
import { NotificationUtilisateur } from 'src/app/class/notification-utilisateur';
import { UtilisateurModel } from 'src/app/class/utilisateur-model';
import { LivreEmpruntService } from 'src/app/service/livre-emprunt.service';

@Component({
  selector: 'app-livre-emprunt-form',
  templateUrl: './livre-emprunt-form.component.html',
  styleUrls: ['./livre-emprunt-form.component.css']
})
export class LivreEmpruntFormComponent implements OnInit {

  @Input() idLivre!: number;
  isSave: boolean = true;
  empruntLivre!: EmpruntLivreModel;
  exemplaires: LivreExemplaireModel[] = [];
  mapExemplaireDatesInvalides!: Map<number, Array<Date>>;
  datesInvalides!: Array<Date>;
  mapExemplaireJoursInvalides!: Map<number, Array<number>>;
  joursInvalides!: Array<number>;
  dateMin!: Date;
  dateMax!: Date;
  datesIntervalle: Date[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private livreEmpruntService: LivreEmpruntService) {}

  private initialiserLesExemplaires(idLivre: number) {
    this.livreEmpruntService.recupererLesExemplaires(idLivre).subscribe({
      next: (exemplaires: LivreExemplaireModel[]) => {
        this.exemplaires = exemplaires;
        this.empruntLivre.exemplaire = this.exemplaires[0];
        this.initialiserLesDatesInvalides(exemplaires);
        this.initialiserLesJoursInvalides(exemplaires);
      },
      error: (error) => console.log(error),
      complete: () => console.log('LivreEmpruntFormComponent#initialiserLesExemplaires finished')
    });
  }

  private initialiserLesDatesInvalides(exemplaires: LivreExemplaireModel[]) {
    this.livreEmpruntService.recupererLesDatesInvalides(exemplaires).subscribe({
      next: (mapExemplaireDatesInvalides: Map<number, Array<Date>>) => {
        this.mapExemplaireDatesInvalides = mapExemplaireDatesInvalides;
        this.datesInvalides = mapExemplaireDatesInvalides.get(this.empruntLivre.exemplaire.id) ?? [];
      },
      error: (error) => console.log(error),
      complete: () => console.log('LivreEmpruntFormComponent#initialiserLesDatesInvalides finished')
    });
  }

  private initialiserLesJoursInvalides(exemplaires: LivreExemplaireModel[]) {
    this.livreEmpruntService.recupererLesJoursInvalides(exemplaires).subscribe({
      next: (mapExemplaireJoursInvalides: Map<number, Array<number>>) => {
        this.mapExemplaireJoursInvalides = mapExemplaireJoursInvalides;
        this.joursInvalides = mapExemplaireJoursInvalides.get(this.empruntLivre.exemplaire.id) ?? [];
      },
      error: (error) => console.log(error),
      complete: () => console.log('LivreEmpruntFormComponent#initialiserLesJoursInvalides finished')
    });
  }

  ngOnInit() {
    this.empruntLivre = new EmpruntLivreModel();
    this.empruntLivre.utilisateur = new UtilisateurModel(0, "toto");
    this.dateMin = new Date();
    this.initialiserLesExemplaires(this.idLivre);
  }

  changerLExemplaire(arg: any) {
    this.datesInvalides = this.mapExemplaireDatesInvalides.get(this.empruntLivre.exemplaire.id) ?? [];
    this.joursInvalides = this.mapExemplaireJoursInvalides.get(this.empruntLivre.exemplaire.id) ?? [];
  }

  validerFormulaire() {
    this.empruntLivre.dateDebut = this.datesIntervalle[0] ?? new Date();
    this.empruntLivre.dateFin = this.datesIntervalle[1] ?? this.datesIntervalle[0] ?? new Date();
    const message: string = `L'utilisateur ${this.empruntLivre.utilisateur.pseudo} a réservé l'exemplaire de la ${this.empruntLivre.exemplaire.bibliotheque} du ${this.empruntLivre.dateDebut.toLocaleDateString('fr-FR')} au ${this.empruntLivre.dateFin.toLocaleDateString('fr-FR')}`;
    NotificationUtilisateur.notifier(message);
    this.router.navigate(['livres']);
  }

  annulerFormulaire() {
    this.router.navigate(['livres']);
  }

}
