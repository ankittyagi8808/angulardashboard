
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ModularComponent } from './modular.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const heroesRoutes: Routes = [
  { path: 'dashboard/:id/:module',  component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModularRoutingModule { }
