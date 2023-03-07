import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageUtilisateur } from 'src/app/class/message-utilisateur';
import { NotificationUtilisateur } from 'src/app/class/notification-utilisateur';
import { UtilisateurModel } from 'src/app/class/utilisateur-model';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  isConnexion: boolean = true;
  utilisateur!: UtilisateurModel;

  constructor(private router: Router, private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
    if (this.utilisateur == undefined) {
      this.utilisateur = new UtilisateurModel();
    }
  }

  toggleIsConnexion() {
    this.isConnexion = !this.isConnexion;
  }

  validerConnexionForm() {
    if (this.utilisateur != undefined) {
      this.authentificationService.connexion(this.utilisateur).subscribe({
        next: (utilisateur: UtilisateurModel) => {
          this.utilisateur = utilisateur;
          this.router.navigate(["accueil"]);
          NotificationUtilisateur.notifier(MessageUtilisateur.UTILISATEUR_CONNECTE);
        },
        error: (error) => {
          console.log(JSON.stringify(error));
          alert(MessageUtilisateur.UTILISATEUR_NON_EXISTANT);
        },
        complete: () => console.log('AuthentificationComponent#validerConnexionForm finished')
      });
    }
  }

  validerInscriptionForm() {
    if (this.utilisateur != undefined) {
      this.authentificationService.inscription(this.utilisateur).subscribe({
        next: (utilisateur: UtilisateurModel) => {
          this.utilisateur = utilisateur;
          this.router.navigate(["accueil"]);
          NotificationUtilisateur.notifier(MessageUtilisateur.UTILISATEUR_INSCRIT);
        },
        error: (error) => {
          console.log(JSON.stringify(error));
          alert(MessageUtilisateur.UTILISATEUR_DEJA_EXISTANT);
        },
        complete: () => console.log('AuthentificationComponent#validerInscriptionForm finished')
      });
    }
  }

}
