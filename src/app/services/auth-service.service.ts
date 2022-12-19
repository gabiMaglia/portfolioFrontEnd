import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8080/api/login';
  currentUserSubject: BehaviorSubject<any>;
  token: any;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  logIn(credentials: any): Observable<any> {
    return this.http.post(this.url, credentials).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        return data;
      })
    );
  }

  logOut() {
    sessionStorage.clear();
  }

  public islog(): Boolean {
    
    return (sessionStorage.getItem('currentUser') !== null)
  }
}
