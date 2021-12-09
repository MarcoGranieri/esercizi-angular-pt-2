import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { BEERMENU, IBeer } from './models/mock';
import { find } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BeerService {

  beerMenu = BEERMENU;

  beerMenu$ = new BehaviorSubject<IBeer[]>(this.beerMenu);

  constructor() { }

  showBeers() {
    return this.beerMenu$.asObservable();
  }

  getBeerById(id: number) {
    // let beerId = this.beerMenu.find(beer => beer.id ===  id);
    // return beerId;

    this.beerMenu$.pipe(
      // find(beer => beer.id === id)
    )

  }



}
