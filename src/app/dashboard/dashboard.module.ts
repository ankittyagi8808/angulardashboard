import { MaterialModule } from '../material/material.module';
import { JobsModule } from '../viewJobs/Jobs.module';
import { CardComponent } from './card.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
imports: [
    BrowserModule,
     MaterialModule,
     FormsModule,
     BrowserAnimationsModule,
   DashBoardRoutingModule, CardComponent,JobsModule],
     providers: [],
    bootstrap: [DashboardComponent]
})
export class DashboardModule{}