import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {nameReducer, userReducer} from '../store/reducers/user.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
users: userReducer,
  name: nameReducer

};

const debugMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return ((state, action) => {
    console.log('state', state);
    console.log('action', action);
    console.log('state', state);
    return reducer(state, action)
  });
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debugMeta] : [];
