import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { DataRecoverService } from 'src/app/services/data-recover.service';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  persona: Persona = new Persona("","","","","","");

  data: any
  islog = this.authService.islog();


  constructor(
    private personaService:PersonaService,
    private getData: DataRecoverService,
    private authService: AuthService
    ) {  }

    // logout(): void {
    //   this.authService.logout()
    // }

   ngOnInit(): void {
    this.getData.getData().subscribe( data=> {
      this.data = data 
    
    });

    this.personaService.getPersona().subscribe((data) => {
      this.persona = data[0]
    })



  }

}
