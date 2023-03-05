import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivreModel } from '../class/livre-model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  baseUrl: string = "http://localhost:8080/biblioRS/serviceRS/livre";

  constructor(private http: HttpClient) { }

  findAll(): Observable<LivreModel[]> {
    return this.http.get<LivreModel[]>(this.baseUrl);
  }

  get(id: number): Observable<LivreModel> {
    return this.http.get<LivreModel>(this.baseUrl + "/" + id);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + "/" + id);
  }

  save(livre: LivreModel): Observable<LivreModel> {
    const httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json", "Accept":"application/json"})};
    return this.http.post<LivreModel>(this.baseUrl, livre, httpOptions);
  }

  update(livre: LivreModel): Observable<LivreModel> {
    const httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json", "Accept":"application/json"})};
    return this.http.put<LivreModel>(this.baseUrl, livre, httpOptions);
  }

}
