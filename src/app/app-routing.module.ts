import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { AuthGuardService } from './auth-guard.service';
//import { LoginComponent } from './authe/login/login.component';
// import {AutheModule} from './authe/authe.module'
const routes: Routes = [
  {
    path:'', loadChildren:() => import('./authe/authe.module').then(m => m.AutheModule)
    // path:'',component:LoginComponent

  },
  {
    path:'dashboard',canActivate: [AuthGuardService],
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    // path:'',component:LoginComponent

  },
  {
    path:'test',component:TestingComponent    // path:'',component:LoginComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
