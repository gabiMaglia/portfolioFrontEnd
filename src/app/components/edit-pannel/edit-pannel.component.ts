import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-edit-pannel',
  templateUrl: './edit-pannel.component.html',
  styleUrls: ['./edit-pannel.component.css']
})
export class EditPannelComponent implements OnInit {
  isLog = this.authService.islog();

  @Input() schema: string = 'btn-outline-light' 
  
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }

}
