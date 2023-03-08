import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreModel } from 'src/app/class/livre-model';
import { LivreService } from 'src/app/service/livre.service';

@Component({
  selector: 'app-livre-form',
  templateUrl: './livre-form.component.html',
  styleUrls: ['./livre-form.component.css']
})
export class LivreFormComponent implements OnInit {

  isSave: boolean = true;

  @Input()
  livreFromInput?: LivreModel;
  livre?: LivreModel;
  @Output()
  validationOkEvent: EventEmitter<LivreModel> = new EventEmitter<LivreModel>();
  @Output()
  annulationEvent: EventEmitter<LivreModel> = new EventEmitter<LivreModel>();

  constructor(private route: ActivatedRoute, private router: Router, private livreService: LivreService) { }

  ngOnInit(): void {
    if (this.livre == undefined && this.route.snapshot.url.join('/') == "livreFormulaire") {
      this.livre = this.route.snapshot.data['livre'] ?? new LivreModel();
      this.isSave = true;
    } else {
      this.livre = JSON.parse(JSON.stringify(this.livreFromInput));
      this.isSave = false;
    }
  }

  validerForm() {
    if (this.isSave) {
      this.sauverLivre();
    } else {
      this.mettreAJourLivre();
    }
  }

  sauverLivre() {
    if (this.livre != undefined) {
      this.livreService.save(this.livre).subscribe({
        next: (livre: LivreModel) => {
          this.livre = livre;
          // pour attendre la sauvegarde en BDD avant de retourner sur la liste des livres
          this.router.navigate(["livres"]);
        },
        error: (error) => console.log(error),
        complete: () => console.log('LivreFormComponent#sauverLivre finished')
      });
    }
  }

  mettreAJourLivre() {
    this.validationOkEvent.emit(this.livre);

    if (this.livre != undefined) {
      this.livreService.update(this.livre).subscribe({
        next: (livre: LivreModel) => this.livre = livre,
        error: (error) => console.log(error),
        complete: () => console.log('LivreFormComponent#mettreAJourLivre finished')
      });
    }
  }

  annulerFormulaire() {
    if (this.isSave) {
      this.livre = undefined;
      this.router.navigate(['livres']);
    } else {
      this.livre = JSON.parse(JSON.stringify(this.livreFromInput));
      this.annulationEvent.emit(this.livre);
    }
  }

}
