import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CardModule } from './dashboard/Card.module';
import { CardComponent } from './dashboard/card.component';
import { DashBoardRoutingModule } from './dashboard/dashboard-routing.module';
import { MaterialModule } from './material/material.module';
import { EnvironmentComponent } from './environment/environment.component';
import { EnvironmentModule } from './environment/environment.module';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModularComponent } from './modular/modular.component';
import { ModularModule } from './modular/modular.module';
import { JobsComponent } from './viewJobs/Jobs.component';
import { JobsModule } from './viewJobs/Jobs.module';


@NgModule({
  declarations: [
    AppComponent,
    EnvironmentComponent,
    DashboardComponent,
    ModularComponent,
    CardComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
     MaterialModule,
     BrowserAnimationsModule,
     FormsModule,
     EnvironmentModule,
    AppRoutingModule,
    DashBoardRoutingModule,
    ModularModule,
    CardModule,
    JobsModule
  ],
  providers: [SelectivePreloadingStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
