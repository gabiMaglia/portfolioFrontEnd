import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Persona from 'src/app/model/persona.model';
import Skills from 'src/app/model/skills.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { PersonaService } from 'src/app/services/persona.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  isLog: Boolean = this.authService.islog();
  defaultProfilePic: String = 'https://iili.io/HuCixdx.png';

  persona: Persona = new Persona(0, '', '', '', '', '', '', '', '', '');
  phraseArr?: String[];

  skills?: Skills[];

  softSkills?: Skills[];
  hardSkills?: Skills[];

  // Forms
  contactFormSkill!: FormGroup;
  contactFormPersona!: FormGroup;

  constructor(
    private authService: AuthService,
    public personaService: PersonaService,
    private skillService: SkillsService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getPersona();
    this.getSkills();
    this.contactFormPersona = this.initFormPersona();
    this.contactFormSkill = this.initFormSkill();
  }

  // Persona Crud
  public getPersona(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data[0];

      this.phraseArrayMaker(this.persona);
    });
  }

  public phraseArrayMaker(persona: Persona): String[] {
    this.persona = persona;
    this.phraseArr = [
      this.persona.phrase1,
      this.persona.phrase2,
      this.persona.phrase3,
    ];
    return this.phraseArr;
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

  // Skill Crud
  public getSkills(): void {
    this.skillService.getSkills().subscribe((skills) => {
      this.skills = skills;
      this.softSkills = skills.filter((data) => data.type === 'soft');
      this.hardSkills = skills.filter((data) => data.type == 'hard');
    });
  }

  public addSkill(contactForm: FormGroup) {
    this.skillService.addSkills(contactForm.value).subscribe({
      next: (response: Skills) => {
        this.getSkills();
        location.reload();

        alert('Add ok');
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.getSkills();
      },
    });
  }

  updateSkill(contactForm: FormGroup) {
    this.skillService.updateSkills(contactForm.value).subscribe({
      next: (response: Skills) => {
        this.getSkills();
        alert('Update ok');
        location.reload();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public deleteSkill(id: Number): void {
    this.skillService.deleteSkills(id).subscribe({
      next: (response: void) => {
        this.getSkills();
        location.reload();
        alert('Delete ok');
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.getSkills();
      },
    });
  }

  // ngFor method

  trackByMethod(index: number, el: any): number {
    return el.id;
  }

  // formMethod SKills

  initFormSkill(): FormGroup {
    return this.fb.group({
      id: [''],
      type: ['', Validators.required],
      img_skill: [''],
      name: ['', Validators.required],
      amount: [''],

      persona_id: ['1', Validators.required],
      persona_DNI_persona: ['32758971', Validators.required],
    });
  }

  onPatchValueSkill(data: any): any {
    return this.contactFormSkill.patchValue({
      id: data.id,
      type: data.type,
      img_skill: data.img_skill,
      name: data.name,
      amount: data.amount === null ? 0 : data.amount,
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
