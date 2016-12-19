import {Routes} from "@angular/router";
import {RegressionComponent} from "./regression.component";
import {RegressionReportComponent} from "./regression-report/regression-report.component";
import {RegressionDataComponent} from "./regression-data/regression-data.component";
import {RegressionStartComponent} from "./regression-start.component";
export const REGRESSION_ROUTE :Routes = [
  {path: '', component: RegressionStartComponent},
  {path: 'data', component: RegressionDataComponent},
  {path: 'report', component: RegressionReportComponent}
]
