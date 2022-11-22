import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.css']
})
export class AddBtnComponent implements OnInit {
  isLog=this.authService.islog();
  @Input() source = '' ;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
