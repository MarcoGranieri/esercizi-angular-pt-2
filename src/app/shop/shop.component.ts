import { Beer, BEERMENU, IBeer } from './../models/mock';
import { BeerService } from './../beer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  beerMenu!: Beer[];
  selectedBeer?: Beer;
  name? : string;
  type? : string;

  constructor(private readonly beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.showBeers().subscribe(
      response => {this.beerMenu = response}
    ).unsubscribe()
  }

  getBeer (name: string, type: string) {
    this.beerService.getBeer(name, type).subscribe(
      response => {this.selectedBeer = response}
    ).unsubscribe()
  }

}
