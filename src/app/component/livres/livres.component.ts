import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreModel } from 'src/app/class/livre-model';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  livres: LivreModel[] = [];
  currentPage: number = 0;
  pommePerPage :number = 10;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.livres = [
      new LivreModel(0, "titre0", "auteur0", new Date(2000,0,1), 0),
      new LivreModel(1, "titre1", "auteur1", new Date(2001,1,2), 1)
    ]
  }

}
