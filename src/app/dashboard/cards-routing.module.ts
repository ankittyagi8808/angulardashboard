import { DashboardComponent } from '../dashboard/dashboard.component';
import { CardComponent } from './card.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const heroesRoutes: Routes = [
  { path: 'env',  component: CardComponent },
   { path: 'viewCards/:id',  component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CardsRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/