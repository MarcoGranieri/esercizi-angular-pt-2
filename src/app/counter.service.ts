import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = 0;

  defaultValue = 1;

  constructor() { }

  returnCounter () {
    if (this.counter >= 0 ) {
      return this.counter;
    } else alert ('error');
  }

  addCounter () {
    console.log(this.counter += this.defaultValue);
  }

  subCounter () {
     console.log(this.counter -= this.defaultValue);
  }
}
