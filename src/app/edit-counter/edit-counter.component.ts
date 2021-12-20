import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss']
})
export class EditCounterComponent implements OnInit {

  defaultValueTs : number = 1;

  constructor(private counterService : CounterService) { }

  ngOnInit(): void {

  }

  addCounterTs() {
    this.counterService.addCounter();
  }

  subCounterTs() {
    this.counterService.subCounter();
  }

}
