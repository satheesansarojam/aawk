import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted:boolean = false;

  constructor(private authService:AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.authService.getvalues()
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.loginUser(this.loginForm.value);
  }


}
