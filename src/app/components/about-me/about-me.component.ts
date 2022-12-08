import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { DataRecoverService } from 'src/app/services/data-recover.service';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  persona:Persona = new Persona('','','','','','');
  
  data:any
  softSkills?: [any]
  hardSkills?: [any]
  lDescription?:string
  isLog = this.authService.islog();
  
  constructor(private getDataServices: DataRecoverService, private authService: AuthService, public personaService:PersonaService) { }
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data: Persona) => {
      this.persona = data
    //  console.log(this.persona)
    })


    this.getDataServices.getData().subscribe( data => {
      this.data = data
      this.lDescription = data.about.litleDescription
      this.softSkills = data.skills.soft
      this.hardSkills = data.skills.hard
    })
  }

}
