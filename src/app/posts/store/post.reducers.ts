import { Post } from '../post.model';

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
      new Date().toLocaleDateString())
  ]
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
