import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Studies from 'src/app/model/studies.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { StudiesService } from 'src/app/services/studies.service';


@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
})
export class StudiesComponent implements OnInit {
  //portada switch
  hide: Boolean = false;
  //log service
  isLog = this.authService.islog();
  //studies managment
  public studies: Studies[] = [];
  public studie?: Studies;
  // Forms
  contactForm!: FormGroup;

  defaultImgValue: String = "https://iili.io/HTILtsa.png" ;
  
  constructor(
    private studiesService: StudiesService,
    private authService: AuthService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getStudies();
    this.contactForm = this.initForm()
  }

  unfold(): void {
    this.hide = !!!this.hide;
  }
  // Crud methods
  public getStudies(): void {
    this.studiesService.getStudies().subscribe({
      next: (response: Studies[]) => {
        this.studies = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public addStudies(contactForm: FormGroup) {
    this.studiesService.addStudie(contactForm.value).subscribe({
      next: (response: Studies) => {
        this.getStudies();
        location.reload();
        
        alert ("Add ok"); 
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.getStudies();
      },
    });
  }

  updateStudies(contactForm: FormGroup) {
    this.studiesService.updateStudie(contactForm.value).subscribe({
      next: (response: Studies) => {
        this.getStudies();
        location.reload();
        alert ("Update ok"); 
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public deleteStudie(id: Number): void {
    this.studiesService.deleteStudie(id).subscribe({
      next: (response: void) => {
        this.getStudies();
        location.reload();
        alert ("Delete ok"); 
        
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.getStudies();
      },
    });
  }

  // ngFor method

  trackByMethod(index:number, el:any): number {
    return el.id;
  }

  // formMethod

  initForm(): FormGroup {
    return this.fb.group({
      id: [''],
      title_st: ['', Validators.required],
      institution_st: ['', Validators.required],
      description_st: ['', Validators.required],
      endDate_st: ['', Validators.required],
      startDate_st: ['', Validators.required],
      img_st: [''],
      persona_id: ['1', Validators.required],
      persona_DNI_persona: ['32758971', Validators.required],
    })
  }

  onPatchValue (data: any): any {
    return this.contactForm.patchValue({id: data.id,
    title_st: data.title_st ,
    institution_st: data.institution_st ,
    description_st: data.description_st ,
    endDate_st: data.endDate_st,
    startDate_st:data.startDate_st ,
    img_st: data.img_st ,
    persona_id: data.persona_id ,
    persona_DNI_persona: data.persona_DNI_persona 
  })
  }
}
