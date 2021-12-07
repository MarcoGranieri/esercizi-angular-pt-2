import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss']
})
export class EditCounterComponent implements OnInit {

  value : number = 1;

  constructor(private counterService : CounterService) { }

  ngOnInit(): void {

  }

  addCounterTs (value : number) {
    this.counterService.addCounter(value);
  }

  subCounterTs (value : number) {
    this.counterService.subCounter(value);
  }

}
