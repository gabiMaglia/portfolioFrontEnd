import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { ExperienceService } from 'src/app/services/experience.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  jobs:any
  hide?:Boolean = false
  isLog = this.authService.islog();

  constructor(private getExpService: ExperienceService, private authService: AuthService) { }

  unfold(): void {
    this.hide = !!!this.hide
  }
  
  ngOnInit(): void {
    this.getExpService.getExp().subscribe( data => {
      this.jobs = data
    })
  }

}
