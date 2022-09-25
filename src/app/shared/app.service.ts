import { Injectable } from '@angular/core';
import { Channel } from '../models/channel';
import { Message } from '../models/message';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  users: User[];
  channels: Channel[];
  messages: Message[];

  constructor() {
    this.users = [];
    this.channels = [];
    this.messages = [];
  }
}
