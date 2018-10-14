
import { JobsComponent } from './Jobs.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const heroesRoutes: Routes = [
  { path: 'jobs/:id',  component: JobsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class JobsRoutingModule { }
