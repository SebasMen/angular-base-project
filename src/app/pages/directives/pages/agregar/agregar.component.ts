import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  text: string = 'Sebastian Meneses';
  color: string = 'red';

  form: FormGroup = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  inputError(field: string): boolean {
    return this.form.get(field)?.invalid || false;
  }

  changeName() {
    this.text = 'Cambio de nombre';
  }

  changeColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
