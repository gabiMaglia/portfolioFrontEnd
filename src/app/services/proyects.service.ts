import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Proyects from '../model/proyects.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  URL = 'http://localhost:8080/pro';
  constructor(private httpClient: HttpClient) { }

  public getProyects(): Observable<Proyects[]>{
    return this.httpClient.get<Proyects[]>(`${this.URL}/traer`)  
  }
}
