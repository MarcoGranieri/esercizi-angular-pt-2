import { CovidService } from './../covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  numberOfProperties!: number;
  allProperties! : string[];

  constructor(private readonly covidService : CovidService) { }

  ngOnInit() {
    this.covidService.getSumOfProperties().subscribe(
      res => this.numberOfProperties = res
    )

    this.covidService.getAllProperties().subscribe(
      res => this.allProperties = res
    )
  }

}
