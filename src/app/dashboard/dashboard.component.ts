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
    constructor(private metricsService:MetricsService) { 
        this.metrics = this.metricsService.getMetrics();
    }
   ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }
}