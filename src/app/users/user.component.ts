import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'mcr-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ UserService ]
})
export class UserComponent implements OnInit {
  @Input() user: User = {
    id: 0,
    name: "User"
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
