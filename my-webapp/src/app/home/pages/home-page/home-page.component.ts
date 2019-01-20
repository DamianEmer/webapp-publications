import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from '../../models/user.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/reducers/app.reducers';
import * as All_Actions from '../../../shared/store/actions/users.actions';
import { getUsers } from 'src/app/shared/store/selectors/users.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  users$: Observable<User[]>;

  users: User[];

  displayedColumns: string[] = ['id', 'name', 'username', 'email'];

  constructor(private userService: UsersService,
    private store: Store<AppState>) { 
      this.users$ = this.store.select(getUsers);
    }

  ngOnInit() {
    this.store.dispatch(new All_Actions.LoadUsers());
  }
}
