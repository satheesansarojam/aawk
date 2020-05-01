import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted:boolean = false;
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private Route:Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      acceptTerms: [false, Validators.requiredTrue]
    });
   console.log(this.registerForm)
  }
  
  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.registerForm.value
    }
    let postVal:any = this.authService.postValues(this.registerForm.value)
    // console.log('postVal',postVal)
    // if(postVal.success === 1) this.Route.navigate(['/'])
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }

}
