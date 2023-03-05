import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreModel } from 'src/app/class/livre-model';
import { LivreService } from 'src/app/service/livre.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  livres: LivreModel[] = [
    // new LivreModel(0, "titre0", "auteur0", new Date(2000, 0, 1), 0),
    // new LivreModel(1, "titre1", "auteur1", new Date(2001, 1, 2), 1)
  ];
  currentPage: number = 0;
  pommePerPage: number = 10;

  constructor(private route: ActivatedRoute, private livreService: LivreService) { }

  ngOnInit(): void {
    this.livreService.findAll().subscribe({
      next: (livres: LivreModel[]) => this.livres = livres,
      error: (error) => console.log(error),
      complete: () => console.log('LivresComponent#ngOnInit finished')
    });
  }

  supprimer(livreModel: LivreModel) {
    const index = this.livres.indexOf(livreModel);
    this.livres.splice(index, 1);
    this.livreService.delete(livreModel.id).subscribe({
      next: () => console.log("LivresComponent#supprimer ok"),
      error: (error) => console.log(error),
      complete: () => console.log('LivresComponent#supprimer finished')
    });
  }

  ajouter(livreModel: LivreModel) {
    this.livres.push(livreModel);
  }

}
