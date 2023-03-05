import { Component, OnInit } from '@angular/core';
import { UtilisateurModel } from 'src/app/class/utilisateur-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  utilisateur?: UtilisateurModel;

  ngOnInit(): void {
    /* Pour tester */
    // this.utilisateur = new UtilisateurModel(0, "tom");
  }

}
