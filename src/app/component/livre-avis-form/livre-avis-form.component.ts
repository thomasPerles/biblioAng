import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvisModel } from 'src/app/class/avis-model';
import { NotificationUtilisateur } from 'src/app/class/notification-utilisateur';
import { UtilisateurModel } from 'src/app/class/utilisateur-model';
import { ISupportMultimediaModel } from 'src/app/interface/isupport-multimedia-model';

@Component({
  selector: 'app-livre-avis-form',
  templateUrl: './livre-avis-form.component.html',
  styleUrls: ['./livre-avis-form.component.css']
})
export class LivreAvisFormComponent {

  isSave: boolean = true;
  avis!: AvisModel;
  utilisateur!: UtilisateurModel;
  support!: ISupportMultimediaModel;

  constructor(private router: Router) {
    this.avis = new AvisModel();
  }

  validerFormulaire() {
    const message: string = `L'utilisateur ${this.utilisateur.pseudo} a écrit l'avis sur ${this.support.titre} : ${this.avis.titre} - ${this.avis.contenu} avec la note ${this.avis.note} le ${this.avis.dateDePublication}`;
    NotificationUtilisateur.notifier(message);
    this.router.navigate(['accueil']);
  }

  annulerFormulaire() {
    this.router.navigate(['accueil']);
  }
}
