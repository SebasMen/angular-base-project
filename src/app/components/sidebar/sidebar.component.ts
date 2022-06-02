import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  templateMenu: MenuItem [] = [
    {
      text: 'Login 1',
      path: './login1'
    },
    {
      text: 'Login 2',
      path: './login2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
