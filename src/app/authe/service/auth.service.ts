import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(public http:HttpClient) { }
  serverUrl = environment.serverUrl
  getvalues(){
    this.http.get(this.serverUrl).subscribe((data:any) =>{
      console.log(data)
    })
  }
  postValues(val){
    this.http.post(this.serverUrl+'/addValues',val).subscribe((data:any) =>{
      console.log(data)
      return data    })
  }
  loginUser(val){
    this.http.post(this.serverUrl+'/login',val).subscribe((data:any) =>{
      console.log(data)
    })
  }
}
