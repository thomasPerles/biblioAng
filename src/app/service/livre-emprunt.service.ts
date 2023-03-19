import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivreExemplaireModel } from '../class/livre-exemplaire-model';

@Injectable({
  providedIn: 'root'
})
export class LivreEmpruntService {

  baseUrl: string = "http://localhost:8080/biblioRS/serviceRS/livreEmprunt";

  constructor(private http: HttpClient) { }

  recupererLesExemplaires(idLivre: number): Observable<LivreExemplaireModel[]> {
    const observable = new Observable<LivreExemplaireModel[]>((subscriber) => {
      subscriber.next(this.recupererLesExemplairesBouchon(idLivre));
    });
    return observable;
  }

  recupererLesDatesInvalides(exemplaires: LivreExemplaireModel[]): Observable<Map<number, Array<Date>>> {
    const observable = new Observable<Map<number, Array<Date>>>((subscriber) => {
      subscriber.next(this.recupererLesDatesInvalidesBouchon(exemplaires));
    });
    return observable;
  }
  recupererLesJoursInvalides(exemplaires: LivreExemplaireModel[]): Observable<Map<number, Array<number>>> {
    const observable = new Observable<Map<number, Array<number>>>((subscriber) => {
      subscriber.next(this.recupererLesJoursInvalidesBouchon(exemplaires));
    });
    return observable;
  }

  recupererLesExemplairesBouchon(idLivre: number): LivreExemplaireModel[] {
    return [
      new LivreExemplaireModel(0, 0, "Bibliothèque de Nice", "Disponible"),
      new LivreExemplaireModel(1, 0, "Bibliothèque de Antibes", "En prêt", new Date(2023, 3, 1)),
      new LivreExemplaireModel(2, 0, "Bibliothèque de Sophia-Antipolis", "Exclu temporairement, En attente de retour")
    ];
  }

  recupererLesDatesInvalidesBouchon(exemplaires: LivreExemplaireModel[]): Map<number, Array<Date>> {
    let map: Map<number, Array<Date>> = new Map();
    let today = new Date();

    for (let i = 0; i < exemplaires.length; i++) {
      let invalidDate1 = new Date();
      invalidDate1.setDate(today.getDate() + i + 1);
      let invalidDate2 = new Date();
      invalidDate2.setDate(today.getDate() + i + 2);
      let invalidDate3 = new Date();
      invalidDate3.setDate(today.getDate() + i + 3);
      map.set(exemplaires[i].id, [invalidDate1, invalidDate2, invalidDate3]);
    }
    return map;
  }

  recupererLesJoursInvalidesBouchon(exemplaires: LivreExemplaireModel[]): Map<number, Array<number>> {
    let map: Map<number, Array<number>> = new Map();
    for (let i = 0; i < exemplaires.length; i++) {
      map.set(exemplaires[i].id, [0, 6]);
    }
    return map;
  }
}
