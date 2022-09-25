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
  myChannels: Channel[];

  private _newChannel = '';
  get newChannel(): string {
    return this._newChannel;
  }
  set newChannel(value: string) {
    this._newChannel = value;
  }

  constructor(private userService: UserService) {
    this.myChannels = this.userService.getAllChannels();
  }

  ngOnInit(): void {
  }

  joinChannel() {
    if(!this.newChannel) return;

    this.userService.joinChannel(this._newChannel, this.user.id);

    // let channel = this.userService.joinChannel(this._newChannel, this.user.id);
    // this.myChannels.push(channel);
    this.newChannel = '';
  }

  logOut() {
    this.logout.emit(this.user.id);
  }
}
