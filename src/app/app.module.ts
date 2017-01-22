import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {DashboardComponent} from "./dashboard/dashboard.component";
import {PanelComponent} from "./Panel/panel.component";
import {LineChartComponent} from "./Shared/LineChart/linechart.component";
import {BarChartComponent} from "./Shared/BarChart/barchart.component";

import {MetricsService} from "./services/metrics.service";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        DashboardComponent,
        LineChartComponent,
        BarChartComponent,
        PanelComponent
   ],
    providers: [
        MetricsService
    ],
    bootstrap: [DashboardComponent]
})
export class AppModule {
}