import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private api = 'http://localhost:3000';
  token: any; 

  constructor(private http: HttpClient) { }


  singin(user:any) {
    return this.http.post(`${this.api}/user/singin`, user)
  }
    
  

  logout() {
    localStorage.removeItem('token')
  }
  
  public islog(): Boolean {
    return false;
    // return (localStorage.getItem('token') !== null)
  }
}
