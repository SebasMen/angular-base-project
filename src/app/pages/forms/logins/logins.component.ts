import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.scss']
})
export class LoginsComponent implements OnInit {

  menu: MenuItem [] = [
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
