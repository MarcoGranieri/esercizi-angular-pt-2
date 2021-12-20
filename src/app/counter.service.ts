import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: number = 0;
  private error: boolean = false;

  constructor() { }

  returnCounter () {
    return this.counter;
    // if (this.counter >= 0 ) {
    //   return this.counter;
    // } else
    // this.counter = 0;
    // return 'error';
  }

  addCounter (value: number = 1) {
    return this.counter += value;
  }

  subCounter (value: number = 1) {
    if(value > this.counter) {
      return 'error';
    } else return this.counter -= value;
  }
}
