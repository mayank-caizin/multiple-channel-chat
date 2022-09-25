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

  users: User[];

  constructor(private appService: AppService) {
    this.users = this.appService.getUsers();
  }

  logInUser() {
    if(!this.newUser) return;

    this.appService.getUser(this.newUser);

    // let user: User = this.appService.getUser(this.newUser);
    // this.users.push(user);
    this.newUser = '';
  }

  trackUser(index: number, user: User) {
    return user.id;
  }

  logOutUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
