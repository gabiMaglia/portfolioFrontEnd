import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Proyects from '../model/proyects.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  URL =environment.server ;
  constructor(private httpClient: HttpClient) { }

  public getProyects(): Observable<Proyects[]>{
    return this.httpClient.get<Proyects[]>(`${this.URL}/get/pro`)  
  }
}
