import { Component, OnInit } from '@angular/core';

import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  catchPhrase?: String;

  constructor(private getPersona: PersonaService) {}

  ngOnInit(): void {
    this.getPersona.getPersona().subscribe((data) => {
      this.catchPhrase = data[0].main_phrase;
    });
  }
}
