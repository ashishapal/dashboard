import { Injectable } from '@angular/core';

export class Metric {
  constructor(public id: number, public title: string, public value: string, public subTitle: string, public panelType: string) {}
}

@Injectable()
export class MetricsService {
  getMetrics() {
    return [
    new Metric( 1, 'Released Today' , '35', 'Tickets', 'Basic'),
    new Metric( 2, 'Open Today' , '18', 'Tickets', 'Basic'),
    new Metric( 3, 'Solved Today' , '40', 'Tickets', 'Basic'),
    new Metric( 4, 'Online Today' , '80', 'Users', 'Basic')
    ];
  }
}

