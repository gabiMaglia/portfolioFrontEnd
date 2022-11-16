import { Component, OnInit } from '@angular/core';
import { DataRecoverService } from 'src/app/services/data-recover.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  jobs:any
  hide?:Boolean = false

  constructor(private getDataService: DataRecoverService) { }

  unfold(): void {
    this.hide = !!!this.hide
  }
  
  ngOnInit(): void {
    this.getDataService.getData().subscribe( data => {
      this.jobs = data.experience
    })
  }

}
