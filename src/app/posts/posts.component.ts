import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducers';
import { State } from './store/blog.reducers';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  blogState: Store<State>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.blogState = this.store.select('posts');
  }

}
