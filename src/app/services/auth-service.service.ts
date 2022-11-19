import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';

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




  // login(usuario: string, password: string ) {
  //   this.http.post(this.api  + '/authenticate', {usuario: usuario, password: password})
  //             .subscribe((resp: any) => {
  //               //Redireccionamos al usuario a su perfil
  //                 (<any> this.router).navigate(['profile'])
  //                 //Guardamos el token en localStorage
  //                 localStorage.setItem('auth_token', resp.token)
  
  //             });
              
  // }
  logout() {
    localStorage.removeItem('token')
  }
  
  public islog(): Boolean {
    return (localStorage.getItem('token') !== null)
  }
}
