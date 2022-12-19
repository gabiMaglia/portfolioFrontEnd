import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import  SocialM  from '../model/socialM.model';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  URL = 'http://localhost:8080/social';
  constructor(private httpClient: HttpClient) { }

  public getSocialM(): Observable<SocialM[]>{
    return this.httpClient.get<SocialM[]>(`${this.URL}/traer`)  
  }
}
