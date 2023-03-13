import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivreExemplaireModel } from '../class/livre-exemplaire-model';

@Injectable({
  providedIn: 'root'
})
export class LivreExemplaireService {

  baseUrl: string = "http://localhost:8080/biblioRS/serviceRS/livreExemplaire";

  constructor(private http: HttpClient) { }

  findAll(): Observable<LivreExemplaireModel[]> {
    return this.http.get<LivreExemplaireModel[]>(this.baseUrl);
  }

  get(id: number): Observable<LivreExemplaireModel> {
    return this.http.get<LivreExemplaireModel>(this.baseUrl + "/" + id);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + "/" + id);
  }

  save(livre: LivreExemplaireModel): Observable<LivreExemplaireModel> {
    const httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json", "Accept":"application/json"})};
    return this.http.post<LivreExemplaireModel>(this.baseUrl, livre, httpOptions);
  }

  update(livre: LivreExemplaireModel): Observable<LivreExemplaireModel> {
    const httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json", "Accept":"application/json"})};
    return this.http.put<LivreExemplaireModel>(this.baseUrl, livre, httpOptions);
  }
}
