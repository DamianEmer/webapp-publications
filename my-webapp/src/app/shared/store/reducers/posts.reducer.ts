import { ActionTypes, All_Actions } from '../actions/posts.actions';
import { Post } from '../../../home/models/post.interface';

export interface State {
    isLoading: boolean;
    posts: Post[]
}

export const initialState: State = {
    isLoading: false,
    posts: []
}

export function postReducer(state: State = initialState, action: All_Actions): State {
    switch (action.type) {
        case ActionTypes.LOADING_POSTS:
            return {
                ...state,
                isLoading: true
            }
        case ActionTypes.LOAD_POSTS:
            return {
                ...state,
                isLoading: false,
                posts: action.payload
            }
    }
}