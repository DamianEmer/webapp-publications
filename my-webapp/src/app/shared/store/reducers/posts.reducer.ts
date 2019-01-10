import { ActionTypes, All_Actions } from '../actions/posts.actions';
import { Post } from '../../../home/models/post.interface';

export interface State {
    isLoading: boolean;
    posts: Post[],
    error_msg: string
}

export const initialState: State = {
    isLoading: false,
    posts: [],
    error_msg: ''
}

export function postReducer(state: State = initialState, action: All_Actions): State {
    switch (action.type) {
        case ActionTypes.LOAD_POSTS:
            return {
                ...state,
                isLoading: true
            }
        case ActionTypes.LOAD_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: action.payload
            }
            case ActionTypes.LOAD_ERROR: 
            return {
                ...state,
                isLoading: false,
                error_msg: action.payload
            }
    }
}