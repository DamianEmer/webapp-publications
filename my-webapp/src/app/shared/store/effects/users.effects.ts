import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromUsers from '../actions/users.actions';
import { User } from 'src/app/home/models/user.interface';
import { UsersService } from '../../services/users.service';

@Injectable()
export class UserEffects {

    constructor(private userService: UsersService,
        private actions$: Actions) {
        console.log("Success");
    }

    @Effect()
    users$: Observable<Action> = this.actions$.pipe(
        ofType(fromUsers.ActionTypes.LOADING_USERS),
        mergeMap(action => {
            console.log('MergeMap (action): '+action)
            return this.userService.getUsers().pipe(
                map((data: User[]) => {
                    console.log("effects" + data);
                    return new fromUsers.LoadUsers(data)
                }
                ),
                catchError(() => of(new fromUsers.LoadError('Ocurrio un error en la carga')))
            )
        })
    );


}