import {createSelector} from '@ngrx/store';
import {UserState} from '../reducers/user.reducer';
import {User} from '../../models/user';

export const userSelector = createSelector(
  (state: UserState) => state.users,
  (users: ReadonlyArray<User>) => users
);
export const userNameSelector = createSelector(
  (state: UserState) => state.users,
  (state: UserState) => state.name,
  (users: ReadonlyArray<User>, name: Readonly<string>) => {
    console.log('name', name);
    return users.filter((user: User) => user.name == name);
  }
);
