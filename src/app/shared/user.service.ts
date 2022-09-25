import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable()
export class UserService {

  constructor(private appService: AppService) { }

  getAllChannels() {
    return this.appService.getChannels();
  }

  joinChannel(name: string, userId: number) {
    return this.appService.joinChannel(name, userId);
  }
}
