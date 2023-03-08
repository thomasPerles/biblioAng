import { Component } from '@angular/core';
import { UtilisateurModel } from 'src/app/class/utilisateur-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  utilisateur?: UtilisateurModel;

}
