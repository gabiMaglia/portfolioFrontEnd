import { Component, OnInit } from '@angular/core';
import Persona from 'src/app/model/persona.model';
import SocialM from 'src/app/model/socialM.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { PersonaService } from 'src/app/services/persona.service';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  persona: Persona = new Persona(0, '', '', '', '', '', '', '', '', '');
  socialM: SocialM = new SocialM(0, '', '', '', '', '');

  islog = this.authService.islog();

  constructor(
    private personaService: PersonaService,
    private authService: AuthService,
    private socialMService: SocialService
  ) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data[0];
    });
    this.socialMService.getSocialM().subscribe((data) => {
      this.socialM = data[0];
    });
  }

  logout(): void {
    this.authService.logOut();
  }
}
