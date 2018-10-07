import { MaterialModule } from '../material/material.module';
import { EnvironmentRoutingModule } from './env-routing.module';
import { EnvironmentComponent } from './environment.component';
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
     EnvironmentRoutingModule],
  providers: [],
  bootstrap: [EnvironmentComponent]
})
export class EnvironmentModule{}