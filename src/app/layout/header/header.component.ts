import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() username;
  @Output() log_out = new EventEmitter();

  ngOnInit(): void {
  }

  logout(){
    this.log_out.emit(true)
  }

}
