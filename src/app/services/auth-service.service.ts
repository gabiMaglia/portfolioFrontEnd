import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
    return true;
    // return (localStorage.getItem('token') !== null)
  }
}
