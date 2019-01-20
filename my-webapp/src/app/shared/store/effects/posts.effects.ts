import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as fromPosts from '../../store/actions/posts.actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { PostsService } from '../../services/posts.service';
import { Post } from 'src/app/home/models/post.interface';


@Injectable()
export class PostEffects {

    @Effect()
    posts$: Observable<Action> = this.actions$.pipe(
        ofType(fromPosts.ActionTypes.LOAD_POSTS),
        mergeMap(action =>
            this.postService.getPosts().pipe(
                map((data: Post[]) => new fromPosts.LoadPostsSuccess(data)),
                catchError(() => of(new fromPosts.LoadError('Hubo un error en la carga de post')))
            )
        )
    )

    constructor(private postService: PostsService,
        private actions$: Actions) {

    }

}