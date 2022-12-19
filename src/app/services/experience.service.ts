import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Experience from '../model/experience.model';
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = 'http://localhost:8080/experience';
  constructor(private httpClient: HttpClient) { }

  public getExp(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(`${this.URL}/traer`)  
  }
}
