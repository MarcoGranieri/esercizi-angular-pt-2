import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter: Subject<Number> = new Subject<Number>();

  constructor() { }

  returnCounter() : Observable<Number> {
    return this.counter;
  }
}
