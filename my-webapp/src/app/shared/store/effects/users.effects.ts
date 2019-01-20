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
        ofType(fromUsers.ActionTypes.LOAD_USERS),
        mergeMap(action =>
            this.userService.getUsers().pipe(
                map((data: User[]) => new fromUsers.LoadUsersSuccess(data)),
                catchError(() => of(new fromUsers.LoadError('Ocurrio un error en la carga')))
            )
        )
    );


}