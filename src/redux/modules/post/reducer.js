import * as types from "../../actionTypes";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
  posts: {
    data: [],
    loading: false,
    error: null,
  },

  post: {
    data: {},
    loading: false,
    error: null,
  },
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    //* LIST POSTS
    case types.LIST_POST: {
      const nextState = cloneDeep(state);
      nextState.posts.loading = true;
      return nextState;
    }

    case types.LIST_POST_SUCCESS: {
      const nextState = cloneDeep(state);
      nextState.posts.loading = false;
      nextState.posts.data = action.payload;
      return nextState;
    }

    case types.LIST_POST_ERROR: {
      const nextState = cloneDeep(state);
      nextState.posts.loading = false;
      nextState.posts.data = [];
      nextState.posts.error = action.payload;
      return nextState;
    }

    //* POST DETAILS
    case types.POST_DETAIL: {
      const nextState = cloneDeep(state);
      nextState.post.loading = true;
      return nextState;
    }

    case types.POST_DETAIL_SUCCESS: {
      const nextState = cloneDeep(state);
      nextState.post.loading = false;
      nextState.post.data = action.post;
      return nextState;
    }

    case types.POST_DETAIL_ERROR: {
      const nextState = cloneDeep(state);
      nextState.post.loading = false;
      nextState.post.data = [];
      nextState.post.error = action.payload;
      return nextState;
    }
    default:
      return state;
  }
};

export default postReducer;
