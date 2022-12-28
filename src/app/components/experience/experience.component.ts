import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Experience from 'src/app/model/experience.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  jobs: any;
  defaultImgValue: String = "https://iili.io/HTIVKa2.png"
  hide?: Boolean = false;
  isLog = this.authService.islog();


  //studies managment
  public experiences: Experience[] = [];
  public experience?: Experience;
  // Forms
  contactForm!: FormGroup;

  constructor(
    private expService: ExperienceService,
    private authService: AuthService,
    private readonly fb: FormBuilder
  ) {}

  unfold(): void {
    this.hide = !!!this.hide;
  }

  ngOnInit(): void {
    this.getExp();
    this.contactForm = this.initForm();
  }

  // Crud methods
  public getExp(): void {
    this.expService.getExp().subscribe({
      next: (response: Experience[]) => {
        this.jobs = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public addExp(contactForm: FormGroup) {
    this.expService.addExp(contactForm.value).subscribe({
      next: (response: Experience) => {
        this.getExp();
        location.reload();
        alert('Add ok');
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.getExp();
      },
    });
  }

  updateExp(contactForm: FormGroup) {
    this.expService.updateExp(contactForm.value).subscribe({
      next: (response: Experience) => {
        this.getExp();
        location.reload();
        alert('Update ok');
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public deleteExp(id: Number): void {
    this.expService.deleteExp(id).subscribe({
      next: (response: void) => {
        this.getExp();
        location.reload();
        alert('Delete ok');
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.getExp();
      },
    });
  }

  trackByMethod(index: number, el: any): number {
    return el.id;
  }

  initForm(): FormGroup {
    return this.fb.group({
      id: [''],
      title_exp: ['', Validators.required],
      institution_exp: ['', Validators.required],
      description_exp: ['', Validators.required],
      startDate_exp: ['', Validators.required],
      endDate_exp: ['', Validators.required],
      is_actual_job_exp: [''],
      img_exp: [''],
      persona_id: ['1', Validators.required],
      persona_DNI_persona: ['32758971', Validators.required],
    });
  }

  onPatchValue(data: any): any {
    return this.contactForm.patchValue({
      id: data.id,
      title_exp: data.title_exp,
      institution_exp: data.institution_exp,
      description_exp: data.description_exp,
      startDate_exp: data.startDate_exp,
      endDate_exp: data.endDate_exp,
      is_actual_job_exp: data.is_actual_job_exp,
      img_exp: data.img_exp,
      persona_id: data.persona_id,
      persona_DNI_persona: data.persona_DNI_persona,
    });
  }
}
