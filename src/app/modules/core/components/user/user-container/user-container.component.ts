import { IUser } from './../../../../shared/models/user';
import { USERS } from './../../../../shared/models/mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

  users = USERS;
  selectedUser! : IUser;
  viewDetails : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectFunc(user: IUser) {
    this.viewDetails = true;
    this.selectedUser = user;
  }

  closeDetailsFunc() {
    this.viewDetails = false;
  }
}
