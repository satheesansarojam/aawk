import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { Routes,RouterModule } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import { MemberComponent } from './member/member.component'; 
// import { MaterialModule } from '../material/material.module';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCheckboxModule} from '@angular/material/checkbox';


const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'member',component:MemberComponent
  }

];

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, UserListComponent, MemberComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule ,
    // MatButtonModule,
    // MatCheckboxModule
    // MaterialModule
  ]
})
export class LayoutModule { }
