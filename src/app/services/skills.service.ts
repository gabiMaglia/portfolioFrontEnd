import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import Skills from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})


export class SkillsService {

  URL = environment.server;
  constructor(private httpClient: HttpClient) { }

  public getSkills(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(`${this.URL}/get/skill`)  
  }
}
