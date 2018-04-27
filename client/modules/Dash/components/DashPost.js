import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router';

// Import styles
import styles from './DashPost.css';

export function DashPost(props) {
  return (
    <div className={styles.post}>
      <div className={styles['post-header']}>
        <span className={styles['post-author']}>{props.post.author}</span>
        <span className={styles['post-date']}> @ date</span>
      </div>
      <div className={styles.content}>
        {props.post.content}
      </div>
      <div className={`${styles['post-actions']} clearfix`}>
        <a href="#" className={styles.link}>Reply</a>
        <a className={styles.link}>Like</a>
      </div>
    </div>
  );
}

DashPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default DashPost;
