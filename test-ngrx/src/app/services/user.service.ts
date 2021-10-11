import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      name: 'test1',
      memo: 'test1 memo'
    },
    {
      name: 'test2',
      memo: 'test2 memo'
    },
    {
      name: 'test3',
      memo: 'test3 memo'
    },

  ];

  usersObservable: Subject<User[]> = new Subject<User[]>();

  constructor() { }

  addUser(user: User): Observable<User> {
    return new Observable(observer => {
      console.log('user', user);
      console.log('this.users', this.users);
      this.users = [...this.users, user];

      observer.next(user);
      observer.complete();
    });


  }

  getUsers(): Observable<User[]> {
    return new Observable(observer => {
      observer.next(this.users);
      observer.complete();
    })

  }



}
