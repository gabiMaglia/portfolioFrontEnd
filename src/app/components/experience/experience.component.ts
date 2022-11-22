import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { DataRecoverService } from 'src/app/services/data-recover.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  jobs:any
  hide?:Boolean = false
  isLog = this.authService.islog();

  constructor(private getDataService: DataRecoverService, private authService: AuthService) { }

  unfold(): void {
    this.hide = !!!this.hide
  }
  
  ngOnInit(): void {
    this.getDataService.getData().subscribe( data => {
      this.jobs = data.experience
    })
  }

}
