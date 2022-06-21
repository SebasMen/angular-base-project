import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    const { email, password } = this.form.value;

    this.authService.login(email, password)
      .subscribe(resp => {
        if(resp === true) {
          this.router.navigateByUrl('/pages/home')
        } else {
          Swal.fire('Error', resp, 'error');
        }
      })
  }

}
