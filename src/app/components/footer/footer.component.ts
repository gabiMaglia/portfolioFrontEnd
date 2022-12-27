import { Component, OnInit } from '@angular/core';
import Persona from 'src/app/model/persona.model';
import  SocialM  from 'src/app/model/socialM.model';
import { PersonaService } from 'src/app/services/persona.service';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialM: SocialM = new SocialM(0,"","","","","")
  persona: Persona = new Persona(0,'','','','','','','','','')

  data:any
  constructor(
    private getPersonaService:PersonaService,
              private  socialMService: SocialService) { }

  ngOnInit(): void {
    this.getPersonaService.getPersona().subscribe((data)=> {
      this.persona = data[0] 
      
        
        this.socialMService.getSocialM().subscribe((data) => {
          this.socialM = data[0]
          
        })
    })

  }


}
