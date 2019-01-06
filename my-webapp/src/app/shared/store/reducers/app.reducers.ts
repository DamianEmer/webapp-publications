import * as fromUsers from './users.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: fromUsers.State
}

export const appReducers: ActionReducerMap<AppState> = {
    users : fromUsers.userReducer 
}