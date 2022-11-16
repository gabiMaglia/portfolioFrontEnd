import { Component, OnInit } from '@angular/core';
import { DataRecoverService } from 'src/app/services/data-recover.service';



@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})

export class WorkCardComponent implements OnInit {
  
  jobs?:[any]


  constructor(private getDataService: DataRecoverService) { }

  ngOnInit(): void {
    this.getDataService.getData().subscribe( data => {
      this.jobs = data.works
    })
  }

}
