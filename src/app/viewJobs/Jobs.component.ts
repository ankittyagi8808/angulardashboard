import { Component, OnInit } from '@angular/core';

export interface JobResult2 {
  moduleName: string;
  totalTestcase: string;
  passedTestCases: string;
  failedTestCases: string;
  inProgress: string;  
}
@Component({
  selector: 'app-jobs',
  templateUrl: './job.component.html',
  styleUrls: ['./Jobs.component.css']
})
export class JobsComponent implements OnInit {
  dashBoard;  
  changeColor;
  ngOnInit() {
  this.dashBoard=true; 
    this.changeColor='changeColor';
  }
jobsResults2: JobResult2[] = [
    { moduleName: 'SmokeSpreadJs', totalTestcase : '150', passedTestCases : '100', failedTestCases : '20', inProgress : '30'},
    {moduleName: 'SmokeUpstream', totalTestcase: '200',passedTestCases: '100',failedTestCases: '20',inProgress: '30'},
    {moduleName: 'SmokeDownStream', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'AscenaP2p_UAT', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'AscenaSourcing1', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'AscenaSupplier1', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'JohnDeereCatalog', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'JohnDeereP2p', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'CBTRequisition', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'CBTOrder', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'Puma', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'LenoraxP2p', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'ExxonCatalog', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'ExxonSourcing', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'ExxonAdminCatalog', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'SmokeDownStream', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    {moduleName: 'ExxonP2p', totalTestcase: '175',passedTestCases:'100',failedTestCases:'20',inProgress:'30'},
    
  ];
}
