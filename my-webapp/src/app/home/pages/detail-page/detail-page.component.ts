import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/reducers/app.reducers';
import * as fromPosts from '../../../shared/store/actions/posts.actions';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private store: Store<AppState>) {

  }

  ngOnInit() {
    console.log("parametro: ", this.route.snapshot.params.id);
    this.store.dispatch(new fromPosts.LoadPosts());
  }

}
