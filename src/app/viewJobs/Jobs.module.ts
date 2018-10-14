import { CardComponent } from '../dashboard/card.component';
import { MaterialModule } from '../material/material.module';
import { JobsComponent } from './Jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
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
   JobsRoutingModule],
     providers: [],
    bootstrap: [JobsComponent]
})
export class JobsModule{}