import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import FeedPostList from '../components/FeedPostList';

// Import Style
// import styles from './NewsFeedPage.css';

// Import Actions
import { fetchPosts } from '../../Post/PostActions';

// Import Selectors
import { getPosts } from '../../Post/PostReducer';

export function NewsFeedPage(props) {
  return (
    <div>
      <FeedPostList
        data={props.data} fetchPosts={props.fetchPosts}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    content: state.auth.content,
    username: state.auth.user,
    data: getPosts(state),
  };
}

NewsFeedPage.propTypes = {
  content: PropTypes.string.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { fetchPosts })(NewsFeedPage);
