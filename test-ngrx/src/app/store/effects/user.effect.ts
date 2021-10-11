import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../../services/user.service';
import {addUser, addUserSuccess, getUsers, getUsersSuccess} from '../actions/user.action';
import {exhaustMap, map} from 'rxjs/operators';
import {User} from '../../models/user';

@Injectable()
export class UserEffect {
  constructor(private action$: Actions,
              private userService: UserService) {
  }

  loadUser$ = createEffect(() => this.action$.pipe(
    ofType(getUsers),
    exhaustMap(() => this.userService.getUsers().pipe(
      map(users => getUsersSuccess(users))
    ))
  ));

  addUser$ = createEffect(() => this.action$.pipe(
    ofType(addUser),
    exhaustMap((user: User)  => this.userService.addUser(user).pipe(
      map(user => addUserSuccess(user))
    ))
  ))
}
