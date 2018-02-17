import React from 'react';
import PropTypes from 'prop-types';

export function DashPost(props) {
  return (
    <div>
        {props.post.content} by {props.post.author}
    </div>
  );
}

DashPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default DashPost;
