import {Component, OnInit} from '@angular/core';
import {User} from './models/user';
import {UserService} from './services/user.service';
import {Store} from '@ngrx/store';
import {addUser, getUsers} from './store/actions/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-ngrx';
  newUser: User = {};
  users: User[] = [];
  constructor(private userService: UserService,
              private store: Store) {
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    /*this.userService.getUsers().subscribe(response => {
      this.users = response;
    });*/
    this.store.dispatch(getUsers());
  }


  addUser() {
    /*this.userService.addUser(this.newUser).subscribe(response => {
      /!*this.getUsers();*!/
    });*/
    this.store.dispatch(addUser(this.newUser));

    /*this.store.dispatch(addUser({user: this.newUser}));*/


  }
}
