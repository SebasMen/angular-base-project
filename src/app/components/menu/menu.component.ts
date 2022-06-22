import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  get user() {
    return this.authService.user;
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.user);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
