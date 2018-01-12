import { ActionReducerMap } from '@ngrx/store';

import * as fromBlog from '../blogs/store/blog.reducers';

export interface AppState {
  blogs: fromBlog.State;
}

export const reducers: ActionReducerMap<AppState> = {
  blogs: fromBlog.blogReducer
};
