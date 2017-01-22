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

  generateData(data:Array<any>) {
    data = []; 
      for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      console.log("adding new data for ${i}");
      data.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
    return data;  
}

