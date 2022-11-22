import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { DataRecoverService } from 'src/app/services/data-recover.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  
  
  data:any
  softSkills?: [any]
  hardSkills?: [any]
  lDescription?:string
  islog = this.authService.islog();
  
  constructor(private getDataServices: DataRecoverService, private authService: AuthService) { }
  
  ngOnInit(): void {
    this.getDataServices.getData().subscribe( data => {
      this.data = data
      this.lDescription = data.about.litleDescription
      this.softSkills = data.skills.soft
      this.hardSkills = data.skills.hard
    })
  }

}
