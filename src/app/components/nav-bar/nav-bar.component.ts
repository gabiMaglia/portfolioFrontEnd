import { Component, OnInit } from '@angular/core';
import { DataRecoverService } from 'src/app/services/data-recover.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  data: any


  constructor(private getData: DataRecoverService) {
   }
   
   ngOnInit(): void {
    this.getData.getData().subscribe( data=> {
      this.data = data  
    
    })
  }

}
