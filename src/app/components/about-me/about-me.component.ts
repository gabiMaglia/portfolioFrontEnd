import { Component, OnInit } from '@angular/core';
import  Persona  from 'src/app/model/persona.model';
import Skills from 'src/app/model/skills.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { PersonaService } from 'src/app/services/persona.service';
import { SkillsService } from 'src/app/services/skills.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  persona:Persona = new Persona(0,'','','','','','','','','');
  

  data?:Skills[]
  phraseArr?:String[]  

  softSkills?: Skills[]
  hardSkills?: Skills[]

  isLog = this.authService.islog();
  
  constructor(private authService: AuthService, public personaService:PersonaService, private skillService: SkillsService) { }
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      
      this.persona = data[0]
      this.phraseArr = [this.persona.phrase1 ,this.persona.phrase2, this.persona.phrase3]
    })


    this.skillService.getSkills().subscribe( data => {
      this.data = data
      this.softSkills = data.filter(data => data.type === "soft")
      this.hardSkills = data.filter(data => data.type == 'hard')

    })
  }

}
