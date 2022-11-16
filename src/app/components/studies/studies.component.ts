
import { Component, OnInit } from '@angular/core';
import { DataRecoverService } from 'src/app/services/data-recover.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  studies?:[any]
  hide?:Boolean = false
  
  
  

  constructor(private getDataService: DataRecoverService) { }
  
  
  unfold(): void {
    this.hide = !!!this.hide
  }
  
  ngOnInit(): void {
    this.getDataService.getData().subscribe(data => {
      this.studies = data.studies
    })

  }



}
