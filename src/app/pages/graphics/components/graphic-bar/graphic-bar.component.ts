import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styleUrls: ['./graphic-bar.component.scss']
})
export class GraphicBarComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };

  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!["y"]!.min = 0;
    }
  }

}
