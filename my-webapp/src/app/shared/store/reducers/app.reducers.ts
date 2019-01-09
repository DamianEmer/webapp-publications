import * as fromUsers from './users.reducer';
import * as fromPosts from './posts.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: fromUsers.State,
    posts: fromPosts.State
}

export const appReducers: ActionReducerMap<AppState> = {
    users : fromUsers.userReducer,
    posts : fromPosts.postReducer 
}