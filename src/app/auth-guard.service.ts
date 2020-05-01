import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';  

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router :Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
      let user:any = localStorage.getItem('logined')
      user = JSON.parse(user)
        if (user == true) {  
            return true;  
        }  
        this.router.navigate(['']);  
        return false;  
    }  
}

