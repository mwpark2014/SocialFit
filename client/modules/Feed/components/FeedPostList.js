import React, { Component } from 'react';
import FeedPost from './FeedPost';
import PropTypes from 'prop-types';

// Import style
// import style from './style';

export class DashPostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        {
          this.props.data.map(post => (
            <FeedPost
              post={post}
              key={post.cuid}
            />
          ))
        }
      </div>
    );
  }
}

DashPostList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default DashPostList;
