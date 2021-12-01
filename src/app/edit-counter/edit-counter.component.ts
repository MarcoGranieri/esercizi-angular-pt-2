import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss']
})
export class EditCounterComponent implements OnInit {

  constructor(public counter : CounterService) { }

  ngOnInit(): void {
  }

}
