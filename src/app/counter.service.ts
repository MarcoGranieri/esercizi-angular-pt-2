import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: number = 0;

  defaultValue: number = 1;

  constructor() { }

  returnCounter () {
    if (this.counter >= 0 ) {
      return this.counter;
    } else
    this.counter = 0;
    return 'error';
  }

  addCounter (value: number) {
    return this.counter += value;
  }

  subCounter (value: number) {
    return this.counter -= value;
  }
}
