import { Covid } from './shared/models/interface';
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
  allValues! : string[];


  constructor(private readonly covidService : CovidService) { }

  ngOnInit() {
    this.covidService.get().subscribe(
      res =>
      {return this.numberOfProperties = Object.keys(res).length,
        this.allProperties = Object.keys(res),
        this.allValues = Object.values(res).map(res => res.Path)
      }
    )
  }
}
