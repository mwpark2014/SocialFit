import React, { Component } from 'react';
import DashPost from '../components/DashPost';
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
          this.props.data.filter(post => post.target === this.props.target).map(post => (
            <DashPost
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
  target: PropTypes.string.isRequired,
};

export default DashPostList;
