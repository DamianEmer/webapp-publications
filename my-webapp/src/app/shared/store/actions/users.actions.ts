import { User } from '../../../home/models/user.interface';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOADING_USERS = '[User] Loading Users',
    LOAD_USERS = '[User] Load Users',
    LOAD_ERROR = '[User] Loading Error'
}

export class LoadingUsers implements Action {
    readonly type = ActionTypes.LOADING_USERS;
}

export class LoadUsers implements Action {
    readonly type = ActionTypes.LOAD_USERS;

    constructor(public payload: User[]) { }
}

export class LoadError implements Action {
    readonly type = ActionTypes.LOAD_ERROR;

    constructor(public payload: string) { }
}

export type All_Actions =
    |   LoadingUsers
    |   LoadUsers
    |   LoadError;