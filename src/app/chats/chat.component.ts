import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Channel } from '../models/channel';
import { Message, MessageBody } from '../models/message';
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
  myMessages: Message[] = [];

  private _newMessage = '';
  get newMessage(): string {
    return this._newMessage;
  }
  set newMessage(value: string) {
    this._newMessage = value;
  }

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
    if(found) {
      this.isMember = true;
      this.myMessages = this.userService.getMyMessages(this.channel.name, this.user.id);
    }
    else this.isMember = false;
  }

  joinChannel() {
    this.userService.joinChannel(this.channel.name, this.user.id);
    this.isMember = true;
  }

  sendMessage() {
    if(!this.newMessage) return;

    this.userService.sendMessage(this.user.id, this.newMessage, this.channel.name);

    this.newMessage = '';
  }
}
