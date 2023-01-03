import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  contactFormPersona!: FormGroup;
  isLog = this.authService.islog();

  constructor(
    private personaService: PersonaService,
    private authService: AuthService,
    private socialMService: SocialService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getPersona();
    this.contactFormPersona = this.initFormPersona();
    this.socialMService.getSocialM().subscribe((data) => {
      this.socialM = data[0];
    });
  }

  logout(): void {
    this.authService.logOut();
  }

  public getPersona(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data[0];
    });
  }

  updatePersona(contactForm: FormGroup) {
    console.log(contactForm.value);
    this.personaService.updatePersona(contactForm.value).subscribe({
      next: (response: Persona) => {
        this.getPersona();
        alert('Update ok');
        location.reload();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  // formMethod Persona

  initFormPersona(): FormGroup {
    return this.fb.group({
      id: [''],
      name_persona: ['', Validators.required],
      surname_persona: ['', Validators.required],
      dni_persona: ['', Validators.required],
      telephone_persona: [''],
      photo_url: [''],
      main_phrase: [''],
      phrase1: [''],
      phrase2: [''],
      phrase3: [''],
    });
  }

  onPatchValuePersona(data: any): any {
    return this.contactFormPersona.patchValue({
      id: data.id,
      name_persona: data.name_persona,
      surname_persona: data.surname_persona,
      dni_persona: data.dni_persona,
      telephone_persona: data.telephone_persona,
      photo_url: data.photo_url,
      main_phrase: data.main_phrase,
      phrase1: data.phrase1,
      phrase2: data.phrase2,
      phrase3: data.phrase3,
    });
  }
}
