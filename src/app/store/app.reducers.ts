import { ActionReducerMap } from '@ngrx/store';

import * as fromBlog from '../posts/store/blog.reducers';

export interface AppState {
  posts: fromBlog.State;
}

export const reducers: ActionReducerMap<AppState> = {
  posts: fromBlog.blogReducer
};
