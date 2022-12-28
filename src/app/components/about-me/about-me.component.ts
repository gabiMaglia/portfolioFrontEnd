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
  persona: Persona = new Persona(0, '', '', '', '', '', '', '', '', '');
  isLog = this.authService.islog();

  skills?: Skills[];
  phraseArr?: String[];

  softSkills?: Skills[];
  hardSkills?: Skills[];

  // Forms
  contactForm!: FormGroup;

  constructor(
    private authService: AuthService,
    public personaService: PersonaService,
    private skillService: SkillsService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getPersona();
    this.getSkills();
  }

  public getPersona(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data[0];
      this.phraseArr = [
        this.persona.phrase1,
        this.persona.phrase2,
        this.persona.phrase3,
      ];
    });
  }

  public getSkills(): void {
    this.skillService.getSkills().subscribe((skills) => {
      this.skills = skills;
      this.softSkills = skills.filter((data) => data.type === 'soft');
      this.hardSkills = skills.filter((data) => data.type == 'hard');
    });
  }

  public addSkills(contactForm: FormGroup) {
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

  updateSkills(contactForm: FormGroup) {
    this.skillService.updateSkills(contactForm.value).subscribe({
      next: (response: Skills) => {
        this.getSkills();
        location.reload();
        alert('Update ok');
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public deleteSkills(id: Number): void {
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
    return this.contactForm.patchValue({
      id: data.id,
      type: data.type,
      img_skill: data.img_skill,
      name: data.name,
      amount: data.amount,

      persona_id: data.persona_id,
      persona_DNI_persona: data.persona_DNI_persona,
    });
  }
}
