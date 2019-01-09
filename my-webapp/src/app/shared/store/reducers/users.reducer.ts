import { ActionTypes, All_Actions } from '../actions/users.actions';
import { User } from 'src/app/home/models/user.interface';

export interface State {
    isLoading: boolean;
    users: User[];
    msg_error: string;
}

export const initialState: State = {
    isLoading: false,
    users: [],
    msg_error: ''
}

export function userReducer(state: State = initialState, action: All_Actions): State {
    switch (action.type) {
        case ActionTypes.LOADING_USERS:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.LOAD_USERS:
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }
        case ActionTypes.LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                msg_error: action.payload
            }
    }
}