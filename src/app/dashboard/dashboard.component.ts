import { Component, OnInit } from '@angular/core';

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
    {moduleName: 'P2p', totalTestcase: '200',passedTestCases: '100',failedTestCases: '20',inProgress: '30'},
    {moduleName: 'Contract', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'Supplier', totalTestcase: '140',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'Workspace', totalTestcase: '90',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'Platform', totalTestcase: '290',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'Report', totalTestcase: '50',passedTestCases:'100',failedTestCases:'20',inProgress:'30'}
  ];
  
  jobsResults1: JobResult1[] = [
    { moduleName: 'Test', totalTestcase : '150', passedTestCases : '100', failedTestCases : '20', inProgress : '30'},
    {moduleName: 'Test1', totalTestcase: '200',passedTestCases: '100',failedTestCases: '20',inProgress: '30'},
    {moduleName: 'Contract', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
  ];

}
