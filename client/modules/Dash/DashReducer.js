import { ADD_POST, ADD_POSTS, DELETE_POST } from './DashActions';

// Initial State
const initialState = { data: [] };

const DashReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.dash.data;

// Get post by cuid
export const getPost = (state, cuid) => state.dash.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default DashReducer;
