import {createAction, props} from '@ngrx/store';
import {User} from '../../models/user';

export const getUsers = createAction('[User] Get user');
export const getUsersSuccess = createAction('[User] Get user Success',
  (users: ReadonlyArray<User>) => ({users})
    // props<{users: ReadonlyArray<User> }>()
);
export const addUser = createAction('[User] Add user', (user: User) => (user));
export const addUserSuccess = createAction('[User] Add user Success',
  (user: User) => ({user})
  // props<{user: Readonly<User> }>()
);


export const assignName = createAction('[name] Assign name',
  (name: string) => ({name})
  );
