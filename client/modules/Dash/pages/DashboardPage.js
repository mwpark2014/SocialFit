import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import DashPostList from '../components/DashPostList';
import DashPostBox from '../components/DashPostBox';

// Import Style
import styles from './DashboardPage.css';

// Import Actions
import { fetchPosts, deletePostRequest } from '../DashActions';

// Import Selectors
import { getPosts } from '../DashReducer';

export class DashboardPage extends Component {
  constructor(props) {
    super(props);

    if (!props.params.username) {
      this.state = ({ targetUser: props.username });
    } else {
      this.state = ({ targetUser: props.params.username });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Row>
          <Col md={2} />
          <Col md={10}>
            <div className={styles.title}>
              Profile Page of {this.state.targetUser}
            </div>
            <DashPostBox author={this.props.username} target={this.state.targetUser} />
            <hr />
            <DashPostList
              target={this.state.targetUser}
              data={this.props.data} fetchPosts={this.props.fetchPosts}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    content: state.auth.content,
    username: state.auth.user,
    data: getPosts(state),
  };
}

DashboardPage.propTypes = {
  content: PropTypes.string.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { fetchPosts })(DashboardPage);
