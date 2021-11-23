import { IUser } from './../models/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {

  @Input() user! : IUser;
  @Output() deletedElement : EventEmitter<IUser> = new EventEmitter();
  @Output() selectedElement : EventEmitter<IUser> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  userToDelete(value: IUser) {
    this.deletedElement.emit(value);
  }

  userToSelect(value: IUser) {
    this.selectedElement.emit(value);
  }

}
