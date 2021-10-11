import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {UserState} from '../store/reducers/user.reducer';
import {userNameSelector, userSelector} from '../store/selector/user.selector';
import {assignName} from '../store/actions/user.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$ = this.store.pipe(select(userSelector));

  constructor(private store: Store<UserState>) {
  }

  name: string = '';

  ngOnInit(): void {
  }

  getTheUser() {
    this.store.dispatch(assignName(this.name));
    this.user$ = this.store.pipe(select(userNameSelector));

  }
  getAll() {
    /*this.store.dispatch(assignName(''));*/
    this.user$ = this.store.pipe(select(userSelector));

  }



}
