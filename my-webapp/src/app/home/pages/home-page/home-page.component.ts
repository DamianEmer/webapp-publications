import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from '../../models/user.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/reducers/app.reducers';
import * as All_Actions from '../../../shared/store/actions/users.actions';
import { delay, isEmpty, defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  users: User[];

  displayedColumns: string[] = ['id', 'name', 'username', 'email'];

  constructor(private userService: UsersService,
    private store: Store<AppState>) { }

  ngOnInit() {

    this.loadPage();

    this.store.select(state => state.users)
      .pipe(delay(1000), defaultIfEmpty())
      .subscribe(users => {
        //console.log("store: ", users)
        if (users != undefined) {
          this.users = users.users;
          console.log("(Store) users", this.users);
        }
      });
  }

  loadPage(): void {
    this.userService.getUsers().subscribe(users => {
      this.store.dispatch(new All_Actions.LoadUsers(users));
      console.log("(Servicio) users: ", users);
    });
  }

}
