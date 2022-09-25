import { Component } from '@angular/core';
import { User } from './models/user';
import { AppService } from './shared/app.service';

@Component({
  selector: 'mcr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _newUser = '';
  get newUser(): string {
    return this._newUser;
  }
  set newUser(value: string) {
    this._newUser = value;
  }

  users: User[] = [];

  constructor(private appService: AppService) {}

  logInUser() {
    let user: User = this.appService.users.find(user => user.name === this.newUser) ?? this.createUser();

    this.users.push(user);
    this.newUser = '';
  }

  createUser() {
    let user: User = {
      id: Math.random(),
      name: this.newUser
    }
    this.appService.users.push(user);
    return user;
  }

  trackUser(index: number, user: User) {
    return user.id;
  }
}
