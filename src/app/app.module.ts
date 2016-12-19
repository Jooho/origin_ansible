import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RegressionDataComponent } from './regression/regression-data/regression-data.component';
import { RegressionReportComponent } from './regression/regression-report/regression-report.component';
import { RegressionComponent } from './regression/regression.component';
import {routing} from "./app.routing";
import { RegressionStartComponent } from './regression/regression-start.component';
import {RegressionService} from "./regression/regression-service.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegressionDataComponent,
    RegressionReportComponent,
    RegressionComponent,
    RegressionStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RegressionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
