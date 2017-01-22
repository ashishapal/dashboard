import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

import {Metric, MetricsService} from '../services/metrics.service';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.component.html',
    styleUrls:['./app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    metrics: Metric[];
 
    constructor(private metricsService:MetricsService) { 
        this.metrics = this.metricsService.getMetrics();
    }
    ngOnInit() {
        console.log('dashboard component initialized');
    }
}