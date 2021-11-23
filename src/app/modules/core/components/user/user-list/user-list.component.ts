import { IUser } from './../../../../shared/models/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Output() selectedElement : EventEmitter<IUser> = new EventEmitter();
  @Input() users! : IUser[];

  constructor() { }

  ngOnInit(): void {
  }

  deleteFunc(value:any) {
    let index = this.users.indexOf(value);
    this.users.splice(index, 1);
  }


}
