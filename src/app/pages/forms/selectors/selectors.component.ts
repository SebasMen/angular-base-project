import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap, tap } from 'rxjs';
import { Countries } from './interface/paises.interface';
import { PaisService } from './services/pais.service';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent implements OnInit {

  form: FormGroup = this.fb.group({
    region  : ['', Validators.required],
    countrie: ['', Validators.required],
    border: ['', Validators.required]
  })

  regions: string[] = [];
  countries: Countries[] = [];
  borders: string[] = [];

  // UI
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private paisesService: PaisService
  ) { }

  ngOnInit(): void {
    this.regions = this.paisesService.regions;

    // Cuando se cambia el primer selector
    this.form.get('region')?.valueChanges
      .pipe(
        // tap permite trasnformar la data recibida
        tap((_) => {
          this.form.get('countrie')?.reset('');
          this.loading = true;
        }),
        // switchMap recibe el valor del primer observablo y ejecuta otro
        switchMap(region => this.paisesService.getCountriesForRegion(region)),
      )
      .subscribe(countries => {
        (countries) ? this.countries = countries : this.countries = [];    
        this.loading = false;   
      })

    // Cunado cambia el pais
    this.form.get('countrie')?.valueChanges
      .pipe( 
        tap((_) => {
          this.form.get('border')?.reset('')
          this.loading = true;
        }),       
        switchMap(code => this.paisesService.getCountrieForCode(code)),
      )
      .subscribe(countrie => {
        (countrie) ? this.borders = countrie[0]?.borders : this.borders = [];
        this.loading = false;  
      })
  }

  save() {
    console.log(this.form.value);
  }

}
