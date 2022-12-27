import {
  Component,
  OnInit,
} from '@angular/core';
import  Persona  from 'src/app/model/persona.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  persona: Persona = new Persona(0,"","","","","","","","", "");
  isLog = this.autService.islog();
  catchPhrase?: String;

  constructor(
    private autService: AuthService,
    private getPersona: PersonaService
  ) { }

  ngOnInit(): void {
    this.getPersona.getPersona().subscribe((data) => {
      this.catchPhrase = data[0].main_phrase
      
    });
  }
}
