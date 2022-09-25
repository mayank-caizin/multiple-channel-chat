import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Channel } from '../models/channel';
import { User } from '../models/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'mcr-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges {
  @Input() channel!: Channel;
  @Input() user!: User;
  isMember: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    let found = false;
    this.channel.users.map(userId => {
      if(userId === this.user.id)
        found = true;
    })
    if(found) this.isMember = true;
    else this.isMember = false;
  }

  ngOnChanges() {
    console.log(this.user.name + ': on changes called');
    let found = false;
    this.channel.users.map(userId => {
      if(userId === this.user.id)
        found = true;
    })
    if(found) this.isMember = true;
    else this.isMember = false;
  }

  joinChannel() {
    this.userService.joinChannel(this.channel.name, this.user.id);
    this.isMember = true;
  }

}
