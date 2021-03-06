import callApi from '../../util/apiCaller';
import cookie from 'react-cookie';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        author: post.author,
        content: post.content,
        target: post.target,
      },
    }, {
      'content-type': 'application/json',
      Authorization: cookie.load('token'),
    }).then(res => dispatch(addPost(res.post)))
    .catch(err => console.log(err));
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function fetchPostByTargetUser(target) {
  return (dispatch) => {
    return callApi(`posts/users/${target}`).then(res => dispatch(addPost(res.post)));
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}

// export function errorHandler(dispatch, error, type) {
//   if (error.response.status === 401) {
//     dispatch({
//       type,
//       payload: 'You are not authorized to do this. Please login and try again.',
//     });
//   } else {
//     dispatch({
//       type,
//       payload: errorMessage,
//     });
//   }
// }
