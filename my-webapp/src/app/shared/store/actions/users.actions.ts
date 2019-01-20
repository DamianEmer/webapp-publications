import { User } from '../../../home/models/user.interface';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOAD_USERS = '[User] Load Users',
    LOAD_USERS_SUCCESS = '[User] Load Users Success',
    LOAD_ERROR = '[User] Load Error'
}

export class LoadUsers implements Action {
    readonly type = ActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
    readonly type = ActionTypes.LOAD_USERS_SUCCESS;

    constructor( public payload: User[] ) { }
}

export class LoadError implements Action {
    readonly type = ActionTypes.LOAD_ERROR;

    constructor( public payload: string ) { }
}

export type All_Actions =
    |   LoadUsers
    |   LoadUsersSuccess
    |   LoadError;