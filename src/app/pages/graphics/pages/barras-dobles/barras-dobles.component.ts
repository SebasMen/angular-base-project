import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styleUrls: ['./barras-dobles.component.scss']
})
export class BarrasDoblesComponent implements OnInit {

  horizontal: boolean = false;

  proveedoresData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024' ],
    datasets: [
      { data: [ 100, 200, 300, 400, 500 ], label: 'Vendedor A' },
      { data: [ 50, 250, 30, 450, 200 ], label: 'Vendedor B' },
    ]
  };

  productData: ChartData<'bar'> = {
    labels: [ '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 200, 300, 400, 300, 100 ], label: 'Carros' },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
