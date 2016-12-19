import {RouterModule, Routes} from "@angular/router";
import {RegressionComponent} from "./regression/regression.component";
import {REGRESSION_ROUTE} from "./regression/regression.route";
import { ModuleWithProviders} from '@angular/core'
import {AppComponent} from "./app.component";
const APP_ROUTES: Routes = [

  {path: '', redirectTo: '/regression', pathMatch: 'full'},
  {path: 'regression', component: RegressionComponent, children: REGRESSION_ROUTE}

]

export const routing = RouterModule.forRoot(APP_ROUTES);

