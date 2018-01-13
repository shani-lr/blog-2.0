import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducers';
import { State } from './store/post.reducers';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postState: Store<State>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.postState = this.store.select('posts');
  }

}
