import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http:HttpClient) { }
  serverUrl = environment.serverUrl
  addValues(val){
    this.http.post(this.serverUrl+'/createMember',val).subscribe((data:any) =>{
      console.log(data)
      return data    })
  }

  getMember(){
    this.http.get(this.serverUrl+'/listMember').subscribe((data:any) =>{
      console.log(data)
      return data    })
  }
}
