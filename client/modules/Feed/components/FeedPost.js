import React from 'react';
import PropTypes from 'prop-types';

export function FeedPost(props) {
  return (
    <div>
        {props.post.content} by {props.post.author}
    </div>
  );
}

FeedPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FeedPost;
