import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Email from '../model/email.model';

@Injectable({
  providedIn: 'root'
})
export class MailerServiceService {
  URL = environment.server;
  constructor(private httpClient: HttpClient) { }


  public  sendMail (email: Email) {
      console.log(email)
      return this.httpClient.post<Email>(`${this.URL}/send_email `,email)
  }
}
