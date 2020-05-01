import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes,RouterModule } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';

// import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  }

];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
    // HttpClientModule
  ]
})
export class AutheModule { }
