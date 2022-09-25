import { Component, OnInit } from '@angular/core';
import { Channel } from '../models/channel';

@Component({
  selector: 'mcr-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  channel!: Channel;

  constructor() { }

  ngOnInit(): void {
  }

}
