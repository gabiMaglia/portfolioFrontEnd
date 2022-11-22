import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: "root",
    pass: "root"
  }
  
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  
  login():void {
    this.authService.singin(this.user).subscribe( (res: any) => {
      console.log(res.token)
      localStorage.setItem('token', res.token); 
      this.router.navigate(['home'])    
    })
  }
  
}
