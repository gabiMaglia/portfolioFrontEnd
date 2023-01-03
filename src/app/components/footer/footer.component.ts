import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Persona from 'src/app/model/persona.model';
import SocialM from 'src/app/model/socialM.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { PersonaService } from 'src/app/services/persona.service';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  isLog: Boolean = this.authService.islog();

  persona: Persona = new Persona(0, '', '', '', '', '', '', '', '', '');
  socialM: SocialM = new SocialM(0, '', '', '', '', '');

  contactFormSocialM!: FormGroup;
  contactFormMailer!: FormGroup

  
  constructor(
    private getPersonaService: PersonaService,
    private socialMService: SocialService,
    private authService: AuthService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getPersona();
    this.getSocialM();
    this.contactFormSocialM = this.initFormSocialM();
    this.contactFormMailer = this.initFormMailer();
  }

  getSocialM() {
    this.socialMService.getSocialM().subscribe((data) => {
      this.socialM = data[0];
      
    });
  }

  updateSocialM(contactForm: FormGroup) {
    this.socialMService.updateSocialM(contactForm.value).subscribe({
      next: (response: SocialM) => {
        alert('Update ok');
        this.getSocialM();
        location.reload();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  getPersona() {
    this.getPersonaService.getPersona().subscribe((data) => {
      this.persona = data[0];
    });
  }

  sendMail(contactForm: FormGroup) {
    console.log(contactForm)
    
  }

  // formSocialM
  initFormSocialM(): FormGroup {
    return this.fb.group({
      id: [''],
      instagram: [''],
      facebook: [''],
      linkedin: [''],
      github: [''],
      gmail: ['', Validators.email],

      persona_id: ['1', Validators.required],
      persona_DNI_persona: ['32758971', Validators.required],
    });
  }

  onPatchValueSocialM(data: any): any {
    return this.contactFormSocialM.patchValue({
      id: data.id,
      instagram: data.instagram,
      facebook: data.facebook,
      linkedin: data.linkedin,
      github: data.github,
      gmail: data.gmail,

      persona_id: data.persona_id,
      persona_DNI_persona: data.persona_DNI_persona,
    });
  }

   // formMailer
   initFormMailer(): FormGroup {
    return this.fb.group({
      name: [''],
      surname: [''],
      email: [''],
      mensaje: ['']

    });
  }

  onPatchValueMailer(data: any): any {
    return this.contactFormMailer.patchValue({
      name: data.name,
      surname: data.surname,
      email: data.email,
      message: data.mesage
    });
  }
}
