import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  api = 'https://localhost:3000/api';
  token: any; 

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string ) {
    this.http.post(this.api  + '/authenticate', {email: email, password: password})
              .subscribe((resp: any) => {
                //Redireccionamos al usuario a su perfil
                (<any> this.router).navigate(['profile'])
                //Guardamos el token en localStorage
                localStorage.setItem('auth_token', resp.token)

              });
              
  }
  logout() {
    localStorage.removeItem('token')
  }

  public get logIn(): Boolean {
    return (localStorage.getItem('token') !== null)
  }
}
