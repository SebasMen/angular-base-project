import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(
    private http: HttpClient
  ) { }

  getUsersSocialMedia() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsersSocialMediaDonut(){
    return this.getUsersSocialMedia()
      .pipe(
        map(data => {
          const labels = Object.keys(data);
          const values = Object.values(data);
          return { labels: labels, values: values }
        })
      )
  }
}
