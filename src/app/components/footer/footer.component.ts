import { Component, OnInit } from '@angular/core';
import { DataRecoverService } from 'src/app/services/data-recover.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data:any
  constructor(private getDataService:DataRecoverService) { }

  ngOnInit(): void {
    this.getDataService.getData().subscribe( data=> {
      this.data = data  
    
    })
  }

}
