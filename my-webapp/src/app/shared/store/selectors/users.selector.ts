import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../reducers/app.reducers';

const getUserState = (state: AppState ) => state.users;


export const getUsers = createSelector(
    getUserState,
    state => state.users
)


