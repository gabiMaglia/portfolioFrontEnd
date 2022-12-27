import { Component, OnInit } from '@angular/core';
import Proyects from 'src/app/model/proyects.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { ProyectsService } from 'src/app/services/proyects.service';



@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})

export class WorkCardComponent implements OnInit {
  isLog= this.authService.islog();
  jobs?:Proyects []
  img?:String []


  constructor(private getProyectService: ProyectsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getProyectService.getProyects().subscribe( data => {
      this.jobs = data
      this.img = new Array
      this.img.push(this.jobs[0].img1_pro, this.jobs[0].img2_pro, this.jobs[0].img3_pro)
      console.log(this.img)
    })
  }

}
