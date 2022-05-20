import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Countries } from '../interface/paises.interface';
import { Countrie } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiurl: string = 'https://restcountries.com/v3.1';
  private _regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regions() {
    return [...this._regions];
  }

  constructor(
    private http: HttpClient
  ) { }

  // Se obtienen lo paises
  getCountriesForRegion(region:string): Observable<Countries[] | null> {
    if(!region) {
      return of(null)
    }

    const url: string = `${this._apiurl}/region/${region}?fields=cca3,name`;
    return this.http.get<Countries[]>(url);
  }

  // Se obtiene los datos del pais
  getCountrieForCode(code:string): Observable<Countrie[] | null> {
    if(!code) {
      return of(null);
    }

    const url = `${this._apiurl}/alpha/${code}`; 
    return this.http.get<Countrie[]>(url);
  }
}
