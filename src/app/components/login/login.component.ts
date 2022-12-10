import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    username: 'root',
    pass: 'root',
  };

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['' ,[Validators.required, Validators.email]],
      password:['' ,[Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {

  }
  
  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password')
  }

  login(event:Event){
    event.preventDefault;
    this.authService.singin(this.form.value).subscribe(data=>{
      console.log('DATA'+ JSON.stringify(data))
      this.router.navigate(['/home'])
    })
  }
}
