import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class RegressionService {

  private report_json: string;

  constructor() {
    this.report_json = "";
  }

  // setReportJsonFile(new_report_json){
  //   this.http.get('data/data.json')
  //     .subscribe(res => this.data = res.json());
  // }
  setReportJsonText(new_report_json: string) {

    this.report_json = new_report_json;
  }

  getReportJson() {
    return this.report_json;
  }


}
