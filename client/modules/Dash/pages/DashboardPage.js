import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
// import styles from '../../components/Auth/PostListItem.css';

// Import Actions
import { protectedTest } from '../../Auth/AuthActions';

// Import Selectors
// import { getPost } from '../../AuthReducer';

export class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.props.protectedTest(this.props.history);
  }

  render() {
    return (
      <div>Your dashboard!</div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.auth.content };
}

DashboardPage.propTypes = {
  protectedTest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { protectedTest })(DashboardPage);
