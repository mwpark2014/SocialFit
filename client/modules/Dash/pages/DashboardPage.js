import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import DashPostList from '../components/DashPostList';
import DashPostBox from '../components/DashPostBox';

// Import Style
import styles from './DashboardPage.css';

// Import Actions
import { fetchPosts, deletePostRequest } from '../../Post/PostActions';

// Import Selectors
import { getPosts } from '../../Post/PostReducer';

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
            <DashPostBox author={this.props.username} target={this.state.targetUser} />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare lorem mi, id efficitur ipsum faucibus vel. Vivamus quis vulputate lorem. Suspendisse suscipit suscipit tortor, venenatis ornare erat egestas ac. Nam blandit consequat turpis sed dictum. Aliquam ut diam vel ante pellentesque dictum ut ullamcorper justo. Proin et tempor velit, quis vehicula nulla. In viverra tellus ac est efficitur, sed pulvinar sem bibendum. Curabitur nibh tortor, dictum eu porta vitae, facilisis nec lacus.</p>
              <p>Vestibulum non felis pretium nulla scelerisque elementum. Praesent et mattis elit. Fusce congue dui lacus, sit amet pulvinar justo vehicula eu. Phasellus posuere tortor nunc, vel sagittis tortor interdum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate nec odio ut fermentum. Donec accumsan augue nec nunc tincidunt auctor. Nam euismod ornare orci vel iaculis. Proin suscipit aliquet diam, id varius quam aliquet at. Nullam lacinia augue sed massa sollicitudin ornare.</p>
            </div>
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
  data: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { fetchPosts })(DashboardPage);
