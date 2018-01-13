import { ActionReducerMap } from '@ngrx/store';

import * as fromPost from '../posts/store/post.reducers';

export interface AppState {
  posts: fromPost.State;
}

export const reducers: ActionReducerMap<AppState> = {
  posts: fromPost.postReducer
};
