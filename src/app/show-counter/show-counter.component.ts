import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.scss']
})
export class ShowCounterComponent implements OnInit {




  constructor(private counterService : CounterService) { }

  ngOnInit(): void {
  }

  returnCounterTs() {
    return this.counterService.returnCounter();
  }

}
