import {Component, OnInit} from "@angular/core";
import {RegressionService} from "../regression-service.service";
import {HttpModule} from "@angular/http";

@Component({
  selector: 'app-regression-report',
  templateUrl: './regression-report.component.html',
  styles:[`
  div{
    text-align: center;
  }
`]
})
export class RegressionReportComponent implements OnInit {

  private report_json:string;
  private jsonObj:any;
  constructor(private regression_service: RegressionService, private http:HttpModule) {
    this.report_json= this.regression_service.getReportJson();
    if (this.report_json != "") {
      this.jsonObj = JSON.parse(this.report_json);
    }
  }

  ngOnInit() {
  }


  setClasses(result:string){
    if (result == 'SUCCESS'){
      return 'success';
    }else if(result == 'WARN'){
      return 'warning';
    }else{
      return 'danger';

    }
  }





}
