import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../store/post.reducers';
import { AppState } from '../../store/app.reducers';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postState: Store<State>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.postState = this.store.select('posts');
  }

}
