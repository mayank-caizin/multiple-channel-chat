import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Channel } from '../models/channel';
import { User } from '../models/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'mcr-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ UserService ]
})
export class UserComponent implements OnInit {
  @Input() user!: User;
  @Output() logout: EventEmitter<number> = new EventEmitter<number>();
  myChannels: Channel[] = [];
  currentChannel!: Channel;

  private _newChannel = '';
  get newChannel(): string {
    return this._newChannel;
  }
  set newChannel(value: string) {
    this._newChannel = value;
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.myChannels = this.userService.getAllChannels();
    this.currentChannel = this.myChannels[0];
  }

  joinChannel() {
    if(!this.newChannel) return;

    let channel = this.userService.joinChannel(this._newChannel, this.user.id);

    this.currentChannel = channel;

    // this.myChannels.push(channel);
    this.newChannel = '';
  }

  selectChannel(channel: Channel) {
    this.currentChannel = channel;
  }

  logOut() {
    this.logout.emit(this.user.id);
  }
}
