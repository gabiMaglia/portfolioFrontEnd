import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { DataRecoverService } from 'src/app/services/data-recover.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  data: any
  islog = this.authService.islog();


  constructor(
    private getData: DataRecoverService,
    private authService: AuthService
    ) {  }

    logout(): void {
      this.authService.logout()
    }

   ngOnInit(): void {
    this.getData.getData().subscribe( data=> {
      this.data = data  
    
    });



  }

}
