import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss']
})
export class EditCounterComponent implements OnInit {

  defaultValueTs! : number;

  constructor(private counterService : CounterService) { }

  ngOnInit(): void {

    this.defaultValueTs = this.counterService.defaultValue;
  }

  addCounterTs() {
    this.counterService.addCounter(this.defaultValueTs);
  }

  subCounterTs() {
    this.counterService.subCounter(this.defaultValueTs);
  }

}
