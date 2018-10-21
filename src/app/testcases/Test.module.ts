import { CardComponent } from '../dashboard/card.component';
import { MaterialModule } from '../material/material.module';
import { TestComponent } from './Test.component';
import { TestRoutingModule } from './test-routing.module';
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
   TestRoutingModule],
     providers: [],
    bootstrap: [TestComponent]
})
export class TestModule{}