import { Action } from '@ngrx/store';
import { Post } from 'src/app/home/models/post.interface';

export enum ActionTypes {
    LOAD_POSTS = '[Post] Load Posts',
    LOAD_POSTS_SUCCESS = '[Post] Load Posts Success',
    LOAD_ERROR = '[Post] Load Error' 
}

export class LoadPosts implements Action {
    readonly type = ActionTypes.LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
    readonly type = ActionTypes.LOAD_POSTS_SUCCESS;

    constructor(public payload: Post[]) { }
}

export class LoadError implements Action {
    readonly type = ActionTypes.LOAD_ERROR

    constructor ( public payload: string ) { }    
}

export type All_Actions = 
    |   LoadPostsSuccess
    |   LoadPosts
    |   LoadError;