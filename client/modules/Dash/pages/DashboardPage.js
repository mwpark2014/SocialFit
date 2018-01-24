import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
// import styles from '../../components/Auth/PostListItem.css';

// Import Actions
// import * from '../../Auth/AuthActions';

// Import Selectors
// import { getPost } from '../../AuthReducer';

export function DashboardPage() {
  return (
    <div>Your dashboard!</div>
  );
}

export default connect()(DashboardPage);
