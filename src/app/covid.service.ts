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

  get(): Observable<Covid> {
    return this.http.get<ICovid>('https://api.covid19api.com/')
    .pipe(
      map(res => Covid.Build(res))
    )
  }
}


