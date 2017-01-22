import {Component, Input} from '@angular/core';
import {OnInit} from "@angular/core";
import {Metric} from '../services/metrics.service';

@Component({
    selector:'panel',
    templateUrl:'./app/Panel/panel.component.html',
    styleUrls:['./app/Panel/panel.component.css']
})
export class PanelComponent implements OnInit {
    @Input() dataMetric: Metric;

    ngOnInit() {
        console.log('panel component initialized');
    }

}