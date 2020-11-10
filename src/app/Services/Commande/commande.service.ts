import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commande} from "../../Models/commande";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  url = 'localhost:8080/';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.url + 'commandes');
  }

  findMyCommandes(): Observable<any> {
    return this.http.get(this.url + 'mycommandes');
  }

  findById(id: string): Observable<any> {
    return this.http.get(this.url + 'commande/' + id);
  }

  save(commande: Commande) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(this.url + 'commande', commande, {headers: this.headers});
  }

  update(commande: Commande) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    return this.http.put(this.url + 'commande', commande, {headers: this.headers});
  }

}
