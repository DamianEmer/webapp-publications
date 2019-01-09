import { Action } from '@ngrx/store';
import { Post } from 'src/app/home/models/post.interface';

export enum ActionTypes {
    LOADING_POSTS = '[Post] Load Posts',
    LOAD_POSTS = '[Post] Loading Posts'
}

export class LoadingPosts implements Action {
    readonly type = ActionTypes.LOADING_POSTS;
}

export class LoadPosts implements Action {
    readonly type = ActionTypes.LOAD_POSTS;

    constructor(public payload: Post[]) { }
}

export type All_Actions = 
    |   LoadingPosts
    |   LoadPosts;