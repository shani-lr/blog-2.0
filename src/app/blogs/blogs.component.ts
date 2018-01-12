import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducers';
import { State } from './store/blog.reducers';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogState: Store<State>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.blogState = this.store.select('blogs');
  }

}
