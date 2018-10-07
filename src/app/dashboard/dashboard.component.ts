import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sidenavWidth = 4;  
  
  ngOnInit() {
   
  }
  getData() {
  }
  doTesting(){
    console.log("increase sidenav width");
  }
  decrease(){
    this.sidenavWidth = 4;
    console.log("decrease sidenav width");
  }
    items:Array<string>= ['','','','','','','','','','','','']
}
