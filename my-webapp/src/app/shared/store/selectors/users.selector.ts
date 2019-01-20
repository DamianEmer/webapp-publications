import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../reducers/app.reducers';
import { State } from '../reducers/users.reducer';

const getUserState = (state: AppState) => state.users;

export const getUsers = createSelector(
    getUserState,
    (state: State) => state.users
);

//export const selectUsers = createFeatureSelector<AppState>('users');