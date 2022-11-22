
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { DataRecoverService } from 'src/app/services/data-recover.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  studies?:[any]
  hide?:Boolean = false
  isLog = this.authService.islog();
  
  

  constructor(private getDataService: DataRecoverService, private authService: AuthService) { }
  
  
  unfold(): void {
    this.hide = !!!this.hide
  }
  
  ngOnInit(): void {
    this.getDataService.getData().subscribe(data => {
      this.studies = data.studies
    })

  }



}
