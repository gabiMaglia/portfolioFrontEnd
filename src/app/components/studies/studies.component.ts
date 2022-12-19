
import { Component, OnInit } from '@angular/core';
import Studies from 'src/app/model/studies.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { DataRecoverService } from 'src/app/services/data-recover.service';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  studies?:Studies[]
  hide?:Boolean = false
  isLog = this.authService.islog();
  
  

  constructor(private getStudiesService: StudiesService, private authService: AuthService) { }
  
  
  unfold(): void {
    this.hide = !!!this.hide
  }
  
  ngOnInit(): void {
    this.getStudiesService.getStudies().subscribe(data => {
      this.studies = data
    })

  }



}
