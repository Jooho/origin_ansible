import { Component, OnInit } from '@angular/core';
import {RegressionService} from "../regression-service.service";

@Component({
  selector: 'app-regression-data',
  templateUrl: './regression-data.component.html'
})
export class RegressionDataComponent implements OnInit {

  private report_json: string="";
  constructor(private regression_service:RegressionService) { }

  ngOnInit() {
  }
  setReportJsonText(){

    this.regression_service.setReportJsonText(this.report_json);
  }
}
