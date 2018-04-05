import { Post } from '../post.model';
import * as PostActions from './post.actions';

export interface State {
  posts: Post[];
}

const initialState: State = {
  posts: [
    new Post('Lorem ipsum',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia nisl ut nibh ' +
      'ornare, quis mollis dolor congue. Vivamus in interdum nibh. Suspendisse mollis metus in dui pretium, ' +
      'nec faucibus libero ultrices. Duis in gravida ipsum, sed facilisis nulla. Fusce viverra, dolor non ' +
      'bibendum dapibus, urna dolor molestie nulla, in commodo felis eros sagittis massa. Nullam posuere ' +
      'bibendum urna vitae posuere. Quisque nec euismod purus. Vestibulum ante ipsum primis in faucibus orci ' +
      'luctus et ultrices posuere cubilia Curae; In euismod, arcu sit amet venenatis interdum, metus lorem ' +
      'sollicitudin purus, a fringilla odio mauris vitae ipsum. Nullam finibus, felis vitae ornare ' +
      'scelerisque, urna risus ultrices erat, ac ullamcorper enim odio quis nisi. Cras sed felis arcu.',
      'https://tinyurl.com/ycqyhspq',
      'shani',
      new Date().toLocaleDateString()),
    new Post('Morbi quis mattis', 'Morbi quis mattis mauris. Curabitur consequat ' +
      'lacus at faucibus fringilla. Maecenas pellentesque justo vitae luctus tincidunt. Ut ' +
      'commodo mollis leo sed suscipit. Nulla quis auctor mi. Morbi ornare turpis euismod est ' +
      'pellentesque, eget placerat dui ultricies. Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elit. Nulla ac libero vel nulla cursus finibus. Donec luctus sodales erat ' +
      'quis efficitur. Sed viverra lorem sem. Quisque egestas varius eros, ut pellentesque erat ' +
      'dignissim volutpat. Duis nec augue non risus efficitur maximus. Suspendisse ut ligula pulvinar, ' +
      'rutrum nisi id, iaculis leo. Phasellus ac mauris purus. Duis dapibus maximus ligula.',
      'https://tinyurl.com/y8p4sn7o',
      'shani',
      new Date().toLocaleDateString())

  ]
};

export function postReducer(state = initialState, action: PostActions.PostActions) {
  switch (action.type) {
    case (PostActions.ADD_POST): {
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    }
    case (PostActions.UPDATE_POST): {
      const post = state.posts[action.payload.id];
      const updatedPost = {
        ...post,
        ...action.payload.post
      };
      const posts = [...state.posts];
      posts[action.payload.id] = updatedPost;
      return {
        ...state,
        posts: posts
      };
    }
    case (PostActions.DELETE_POST): {
      const posts = [...state.posts];
      posts.splice(action.payload, 1);
      return {
        ...state,
        posts: posts
      };
    }
    default:
      return state;
  }
}
