import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url = 'http://localhost:3000';
  currentUserSubject: BehaviorSubject<any>
  token: any; 

  constructor(private http: HttpClient) { 
    console.log("gooooooo")
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }


  singin(credentials: any): Observable<any> {
    return this.http.post(this.url, credentials).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data))
      return data
    }))
  }
    
  


  
  public islog(): Boolean {
    return true;
    // return (localStorage.getItem('token') !== null)
  }
}
