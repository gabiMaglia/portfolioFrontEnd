import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Proyects from 'src/app/model/proyects.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { ProyectsService } from 'src/app/services/proyects.service';



@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})

export class WorkCardComponent implements OnInit {
  isLog: Boolean= this.authService.islog();

  jobs?:Proyects []
  img?:String []

  contactFormJob!: FormGroup


  constructor(private proyectService: ProyectsService, private authService: AuthService, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.getProyects()
    this.contactFormJob = this.initFormJob()
  }


  // CRUD
  getProyects(): void {
    this.proyectService.getProyects().subscribe( data => {
      this.jobs = data
      this.getCarrouselImg(this.jobs)
    }  
    )
  }
  getCarrouselImg(data: Proyects[]): String[] {
    this.img = new Array
    this.img.push(data[0].img1_pro, data[0].img2_pro, data[0].img3_pro)
    return this.img
  }

  
  public addProyect(contactForm: FormGroup) {
    this.proyectService.addProyect(contactForm.value).subscribe({
      next: (response: Proyects) => {
        this.getProyects();
        location.reload();

        alert('Add ok');
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.getProyects();
      },
    });
  }

  updateProyect(contactForm: FormGroup) {
    this.proyectService.updateProyect(contactForm.value).subscribe({
      next: (response: Proyects) => {
        this.getProyects();
        alert('Update ok');
        location.reload();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public deleteProyect(id: Number): void {
    this.proyectService.deleteProyect(id).subscribe({
      next: (response: void) => {
        this.getProyects();
        location.reload();
        alert('Delete ok');
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.getProyects();
      },
    });
  }




   // ngFor method

   trackByMethod(index: number, el: any): number {
    return el.id;
  }

  // formMethod SKills

  initFormJob(): FormGroup {
    return this.fb.group({
      id: [''],
      title_pro: ['', Validators.required],
      technologies_pro: [''],
      description_pro: ['', Validators.required],
      deploy_link_pro: [''],
      github_link_pro: [''],
      img1_pro: [''],
      img2_pro: [''],
      img3_pro: [''],
      

      persona_id: ['1', Validators.required],
      persona_DNI_persona: ['32758971', Validators.required],
    });
  }

  onPatchValueJob(data: any): any {
    return this.contactFormJob.patchValue({
      id: data.id,
      title_pro: data.title_pro,
      technologies_pro: data.technologies_pro,
      description_pro: data.description_pro,
      deploy_link_pro: data.deploy_link_pro,
      github_link_pro: data.github_link_pro,
      img1_pro: data.deploy_link_pro,
      img2_pro: data.deploy_link_pro,
      img3_pro: data.deploy_link_pro,
  
    });
  }


}
