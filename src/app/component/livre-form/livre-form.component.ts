import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreModel } from 'src/app/class/livre-model';

@Component({
  selector: 'app-livre-form',
  templateUrl: './livre-form.component.html',
  styleUrls: ['./livre-form.component.css']
})
export class LivreFormComponent implements OnInit {

  isSave:boolean = true;

  @Input()
  livre?: LivreModel;
  @Output()
  validationOkEvent: EventEmitter<LivreModel> = new EventEmitter<LivreModel>();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if (this.livre == undefined && this.route.snapshot.url.join('/') == "livreFormulaire") {
      this.livre = this.route.snapshot.data['voiture'];
      this.isSave = true;
    } else {
      this.isSave = false;
    }
  }

  validerForm() {
    if (this.isSave) {
      this.sauverLivre();
    } else {
      this.mettreAJourLivre();
    }
    this.router.navigate(["livres"]);
  }

  sauverLivre() {}

  mettreAJourLivre() {
    this.validationOkEvent.emit(this.livre);
  }

  annulerFormulaire() {
    this.livre = undefined;
    this.router.navigate(['livres']);
  }

}
