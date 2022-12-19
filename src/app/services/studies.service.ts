import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import Studies from '../model/studies.model';
@Injectable({
  providedIn: 'root'
})

export class StudiesService {
  URL = 'http://localhost:8080/studies';
  constructor(private httpClient: HttpClient) { }

  public getStudies(): Observable<Studies[]>{
    return this.httpClient.get<Studies[]>(`${this.URL}/traer`)
  }
}
