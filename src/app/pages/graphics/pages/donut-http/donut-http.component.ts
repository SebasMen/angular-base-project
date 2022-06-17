import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

import { GraphicsService } from '../../services/graphics.service';


@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styleUrls: ['./donut-http.component.scss']
})
export class DonutHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: []
  };

  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graphicsService: GraphicsService ) { }

  ngOnInit(): void {
    // this.graphicsService.getUsersSocialMedia()
    //   .subscribe(res => {
    //     const labels = Object.keys(res);
    //     const values = Object.values(res);
    //     const data = { data: values }

    //     this.doughnutChartData.labels = labels;
    //     this.doughnutChartData.datasets.push(data);
    //   })

    // Petición utilizando operadores de rxjs
    this.graphicsService.getUsersSocialMediaDonut()
      .subscribe(({ labels, values }) => {
        const data = { data: values };
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets.push(data);
      })
  }

}
