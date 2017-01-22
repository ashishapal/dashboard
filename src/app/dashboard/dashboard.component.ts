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
    private chartData: Array<any>;
    private lineChartData: Array<any>;
    constructor(private metricsService:MetricsService) { 
        this.metrics = this.metricsService.getMetrics();
        //this.generateData();
        this.GetAndSetBarChartData();  
        this.lineChartData = this.metricsService.generateData(this.lineChartData);
    }
   ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.GetAndSetBarChartData();

      // change the data periodically
      setInterval(() => this.GetAndSetBarChartData(), 3000);
    }, 1000);
  }

 GetAndSetBarChartData() {
    //console.log('getting data');
    this.chartData = this.metricsService.generateData(this.chartData);
    //console.log(this.chartData);
  }

