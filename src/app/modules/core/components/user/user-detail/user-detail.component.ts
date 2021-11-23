import { IUser } from './../../../../shared/models/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user! : IUser;
  @Output() closedDetails : EventEmitter<IUser> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
