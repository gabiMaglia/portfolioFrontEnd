import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { DataRecoverService } from 'src/app/services/data-recover.service';



@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})

export class WorkCardComponent implements OnInit {
  isLog= this.authService.islog();
  jobs?:[any]


  constructor(private getDataService: DataRecoverService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getDataService.getData().subscribe( data => {
      this.jobs = data.works
    })
  }

}
