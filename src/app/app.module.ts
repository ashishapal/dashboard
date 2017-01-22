import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {DashboardComponent} from "./dashboard/dashboard.component";
import {PanelComponent} from "./Panel/panel.component";

import {MetricsService} from "./services/metrics.service";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        DashboardComponent,
        PanelComponent
   ],
    providers: [
        MetricsService
    ],
    bootstrap: [DashboardComponent]
})
export class AppModule {
}