import { HandleError, HttpErrorHandler } from '../http-error-handler.service';
import { JobResult } from './dashboard.component';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

@NgModule({
   providers: [DashBoardService]
})

@Injectable()
export class DashBoardService {
   apiRoot: string = 'https://my-json-server.typicode.com/ankittyagi8808/FakeServer'; // URL to web api
  private handleError: HandleError;
 constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('DashBoardService');
  }

  /** GET ModuleResultFrom Server from the server */
  getModuleResults (): Observable<JobResult[]> {
     let url = `${this.apiRoot}/jobs`;
    const params1 = new HttpParams().set('moduleName', 'Supplier');
    return this.http.get<JobResult[]>(url, {params:params1})
      .pipe(
        catchError(this.handleError('getModuleResults', []))
      );
  }

 getJobsForModule (env, moduleName): Observable<JobResult[]> {
    return this.http.get<JobResult[]>(this.apiRoot)
      .pipe(
        catchError(this.handleError('getJobsForModule', []))
      );
  }
}

