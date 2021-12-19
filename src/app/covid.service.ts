import { ICovid, Covid } from './covid/shared/models/interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private readonly http: HttpClient) { }

  getSumOfProperties(): Observable<Covid> {
    return this.http.get<ICovid>('https://api.covid19api.com/')
    .pipe(
      map(res => Covid.Build(res))
    )
  }

  getAllProperties(): Observable<Covid> {
    return this.http.get<ICovid>('https://api.covid19api.com/')
    .pipe(
      map(res => Covid.Build(res))
    )
  }

  getAllValues() {
    return this.http.get<any>('https://api.covid19api.com/')
    .pipe(
      map(res => Covid.Build(res))
    )
  }
}


