import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvisModel } from '../class/avis-model';

@Injectable({
  providedIn: 'root'
})
export class LivreAvisService {

  baseUrl: string = "http://localhost:8080/biblioRS/serviceRS/livreAvis";

  constructor(private http: HttpClient) { }

  findAll(): Observable<AvisModel[]> {
    return this.http.get<AvisModel[]>(this.baseUrl);
  }

  get(id: number): Observable<AvisModel> {
    return this.http.get<AvisModel>(this.baseUrl + "/" + id);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + "/" + id);
  }

  save(livre: AvisModel): Observable<AvisModel> {
    const httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json", "Accept":"application/json"})};
    return this.http.post<AvisModel>(this.baseUrl, livre, httpOptions);
  }

  update(livre: AvisModel): Observable<AvisModel> {
    const httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json", "Accept":"application/json"})};
    return this.http.put<AvisModel>(this.baseUrl, livre, httpOptions);
  }

}
