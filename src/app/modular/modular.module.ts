import { MaterialModule } from '../material/material.module';
import { ModularRoutingModule } from './modular-routing.module';
import { ModularComponent } from './modular.component';
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
   ModularRoutingModule],
     providers: [],
    bootstrap: [ModularComponent]
})
export class ModularModule{}