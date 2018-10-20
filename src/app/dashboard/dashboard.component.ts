import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

export interface JobResult {
  moduleName: string;
  totalTestcase: string;
  passedTestCases: string;
  failedTestCases: string;
  inProgress: string;  
}

export interface JobResult1 {
  moduleName: string;
  totalTestcase: string;
  passedTestCases: string;
  failedTestCases: string;
  inProgress: string;  
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashBoard;  
  changeColor;
  constructor(public router: Router) {

  }
  ngOnInit() {
  this.dashBoard=true; 
    this.changeColor='changeColor';
  }
  getData() {
  }
  showDashboard(){
    this.dashBoard=true; 
    console.log("increase sidenav width");
  }
  showBuild(){
 this.dashBoard=false;
  }
   jobsResults: JobResult[] = [
    { moduleName: 'Sourcing', totalTestcase : '150', passedTestCases : '100', failedTestCases : '20', inProgress : '30'},
    {moduleName: 'P2p', totalTestcase: '200',passedTestCases: '100',failedTestCases: '50',inProgress: '50'},
    {moduleName: 'Contract', totalTestcase: '175',passedTestCases:'100',failedTestCases:'10',inProgress:'15'},
    {moduleName: 'Supplier', totalTestcase: '140',passedTestCases:'100',failedTestCases:'10',inProgress:'30'},
    {moduleName: 'Workspace', totalTestcase: '90',passedTestCases:'50',failedTestCases:'20',inProgress:'20'},
    {moduleName: 'Platform', totalTestcase: '290',passedTestCases:'200',failedTestCases:'50',inProgress:'40'},
    {moduleName: 'Report', totalTestcase: '50',passedTestCases:'10',failedTestCases:'20',inProgress:'20'}
  ];
  
  jobsResults1: JobResult1[] = [
    { moduleName: 'Test', totalTestcase : '150', passedTestCases : '100', failedTestCases : '20', inProgress : '30'},
    {moduleName: 'Test1', totalTestcase: '200',passedTestCases: '100',failedTestCases: '20',inProgress: '30'},
    {moduleName: 'Contract', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
  ];
 
 navigateToJobs() {
    this.router.navigate(['/jobs', 'Rfx']);
    }
}
