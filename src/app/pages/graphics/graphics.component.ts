import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  menu: MenuItem [] = [
    {
      text: 'Graphic Bars',
      path: './bars'
    },
    {
      text: 'Graphic Doubles Bars',
      path: './double-bars'
    },
    {
      text: 'Graphic Donuts',
      path: './donut'
    },
    {
      text: 'Graphic Donuts HTTP',
      path: './donut-http'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
