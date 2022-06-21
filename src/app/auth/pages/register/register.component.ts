import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
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

  register() {
    const { name, email, password } = this.form.value;

    this.authService.create(name, email, password)
      .subscribe(resp => {
        if(resp === true) {
          this.router.navigateByUrl('/pages/home');
        } else {
          Swal.fire('Error', resp, 'error');
        }
      })
  }

}
