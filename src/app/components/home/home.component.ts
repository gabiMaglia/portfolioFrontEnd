import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataRecoverService } from 'src/app/services/data-recover.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = ""
  constructor(
    private getData: DataRecoverService,
    private titleService: Title
    ) { 
    
  }
  
  
  ngOnInit(): void {
    this.getData.getData().subscribe( data=> {
      this.title = data.name 
      this.titleService.setTitle(this.title)
  });
  }
}
