import { User } from '../../../home/models/user.interface';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOADING_USERS = '[User] Loading Users',
    LOAD_USERS = '[User] Load Users'
}

export class LoadingUsers implements Action {
    readonly type = ActionTypes.LOADING_USERS;
}

export class LoadUsers implements Action {
    readonly type = ActionTypes.LOAD_USERS;

    constructor ( public payload: User[]) { }
}

export type All_Actions = 
    |   LoadingUsers
    |   LoadUsers;