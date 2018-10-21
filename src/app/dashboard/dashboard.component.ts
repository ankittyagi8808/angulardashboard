import { DashBoardService } from './dashBoard.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface JobResult {
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
  environmet;
  jobResults: JobResult[] = [];
  constructor( public router: Router, private httpclient: HttpClient,private dashBoardService: DashBoardService) {

  }
  ngOnInit() {
     this.getHeroes();
      this.dashBoard = true ;
      this.changeColor = 'changeColor';
      this.environmet = this.router.routerState.snapshot.root.queryParams['env'];
  }
  getHeroes(): void {
    this.dashBoardService.getModuleResults()
      .subscribe(results => this.jobResults = results);
  }
  showDashboard(){
    this.dashBoard=true; 
  }
  showBuild(){
    this.dashBoard=false;
  } 
 navigateToJobs(mod) {
    this.router.navigate(['jobs'],{ queryParams: { env: this.environmet, moduleName: mod}});
  }
}
