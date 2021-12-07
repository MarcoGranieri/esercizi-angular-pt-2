import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.scss']
})
export class ShowCounterComponent implements OnInit {

  counter! : number | string;


  constructor(private counterService : CounterService) { }

  ngOnInit(): void {
    // this.counter = this.counterService.returnCounter();
    this.counterService.returnCounter().subscribe(
      (data) => {
        this.counter = data;
      },
      (error) => {
        this.counter = error;
      }
    );
  }
}
