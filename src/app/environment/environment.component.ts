import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Env {
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

  envs: Env[] = [
    {viewValue: 'DEV'},
    {viewValue: 'UAT'},
    {viewValue: 'PROD'},
    {viewValue: 'QC'},
     {viewValue: 'PRODSTAG'}
  ];

  go() {
    this.router.navigate(['/dashboard'],{ queryParams: { env: this.selectedValue} });
    }
}
