import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidTokenGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(): Observable<boolean> | boolean {
    console.log('activate')
    return this.authService.validToken()
      .pipe(
        tap(valid => {
          if(!valid) {
            this.router.navigateByUrl('/auth')
          }
        })
      )
  }

  canLoad(): Observable<boolean> | boolean {
    console.log('load')
    return this.authService.validToken()
      .pipe(
        tap(valid => {
          if(!valid) {
            this.router.navigateByUrl('/auth')
          }
        })
      )
  }
}
