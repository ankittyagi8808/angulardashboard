import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent  {

  constructor(public router: Router) {

  }
selectedValue: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'DEV'},
    {value: 'pizza-1', viewValue: 'UAT'},
    {value: 'tacos-2', viewValue: 'PROD'}
  ];

  login() {
    this.router.navigate(['/dashboard', this.selectedValue]);
    }
  doTesting(){
    
  }
}
