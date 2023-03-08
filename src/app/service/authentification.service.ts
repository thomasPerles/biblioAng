import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilisateurModel } from '../class/utilisateur-model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  baseUrl: string = "http://localhost:8080/biblioRS/serviceRS/authentification";

  constructor(private http: HttpClient) { }

  connecterUtilisateur(utilisateur: UtilisateurModel): Observable<UtilisateurModel> {
    const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json", "Accept": "application/json" }) };
    return this.http.post<UtilisateurModel>(this.baseUrl, utilisateur, httpOptions);
    /* POUR TESTER */
    // return new Observable<UtilisateurModel>(observer => {
    //   observer.next(utilisateur);
    //   observer.complete();
    // });
  }

  inscrireUtilisateur(utilisateur: UtilisateurModel): Observable<UtilisateurModel> {
    const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json", "Accept": "application/json" }) };
    return this.http.put<UtilisateurModel>(this.baseUrl, utilisateur, httpOptions);
  }

}
