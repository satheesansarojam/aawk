import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private Route:Router) { }
  userName:any;

  ngOnInit(): void {
    this.userName = localStorage.getItem('name')
  }
  logout(event){
    // event.preventDefault()   prevent page reload
    console.log(event)
    if(event) {
      localStorage.setItem('logined','false')
      this.Route.navigate([''])
    }
  }

}
