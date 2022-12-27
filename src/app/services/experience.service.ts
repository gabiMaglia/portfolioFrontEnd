import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Experience from '../model/experience.model';
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = environment.server;
  constructor(private httpClient: HttpClient) { }

  public getExp(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(`${this.URL}/get/experience`)  
  }
}
