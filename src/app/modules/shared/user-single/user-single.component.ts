import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {

  @Input() user! : IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
