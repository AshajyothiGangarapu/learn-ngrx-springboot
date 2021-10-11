import {createReducer, on} from '@ngrx/store';
import {addUser, addUserSuccess, assignName, getUsersSuccess} from '../actions/user.action';
import {User} from '../../models/user';

export interface UserState {
  users: ReadonlyArray<User>,
  name: Readonly<string>

}
const initialState: ReadonlyArray<User> = [];

export const userReducer =createReducer(
  initialState,
  on(getUsersSuccess, (state, {users}) => [...users]),
  on(addUserSuccess, (state, {user}) => [...state, user])
)

const initialNameSate = '';
export const nameReducer = createReducer(
  initialNameSate,
  on(assignName, (state, { name }) => name)
);
function mockUsers(): User[] {
  return [{
    name: 'test1',
    memo: 'test1 memo'
  },
    {
      name: 'test2',
      memo: 'test2 memo'
    }]

}

