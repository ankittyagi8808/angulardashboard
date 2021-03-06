import { Injectable, NgModule } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@NgModule({
   providers: [SelectivePreloadingStrategyService]
})

export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      this.preloadedModules.push(route.path);
      console.log('Preloaded: ' + route.path);

      return load();
    } else {
      return of(null);
    }
  }
}