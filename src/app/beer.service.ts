import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Beer, BEERMENU, IBeer } from './models/mock';
import { map, find } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BeerService {

  beerMenu = BEERMENU;

  beerMenu$ = new BehaviorSubject<IBeer[]>(this.beerMenu);

  constructor() { }

  showBeers() : Observable<Beer[]> {
    return this.beerMenu$.asObservable();
  }

  getBeerById(id: number) : Observable<Beer | undefined> {
    return this.beerMenu$.pipe(
      map((response : IBeer[]) => response.find(beer => beer.id === id) )
    )

  }

  getBeer(name: string, type: string) : Observable<Beer | undefined> {
    return this.beerMenu$.pipe(
      map((response : IBeer[]) => response.find((beer: IBeer) => beer.name === name && beer.type === type))
    )
  }



}
