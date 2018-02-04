import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
// import styles from '../../components/Auth/PostListItem.css';

// Import Actions
import { protectedTest } from '../../Auth/AuthActions';

// Import Selectors
// import { getPost } from '../../AuthReducer';

<<<<<<< HEAD
export function DashboardPage() {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare lorem mi, id efficitur ipsum faucibus vel. Vivamus quis vulputate lorem. Suspendisse suscipit suscipit tortor, venenatis ornare erat egestas ac. Nam blandit consequat turpis sed dictum. Aliquam ut diam vel ante pellentesque dictum ut ullamcorper justo. Proin et tempor velit, quis vehicula nulla. In viverra tellus ac est efficitur, sed pulvinar sem bibendum. Curabitur nibh tortor, dictum eu porta vitae, facilisis nec lacus.</p>
      <p>Vestibulum non felis pretium nulla scelerisque elementum. Praesent et mattis elit. Fusce congue dui lacus, sit amet pulvinar justo vehicula eu. Phasellus posuere tortor nunc, vel sagittis tortor interdum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate nec odio ut fermentum. Donec accumsan augue nec nunc tincidunt auctor. Nam euismod ornare orci vel iaculis. Proin suscipit aliquet diam, id varius quam aliquet at. Nullam lacinia augue sed massa sollicitudin ornare.</p>
    </div>
  );
=======
export class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.props.protectedTest();
  }

  render() {
    return (
      <div>Your dashboard!</div>
    );
  }
>>>>>>> master
}

function mapStateToProps(state) {
  return { content: state.auth.content };
}

DashboardPage.propTypes = {
  protectedTest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { protectedTest })(DashboardPage);
