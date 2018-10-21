
import { TestComponent } from './Test.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const heroesRoutes: Routes = [
  { path: 'jobs/:id',  component: TestComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestRoutingModule { }
