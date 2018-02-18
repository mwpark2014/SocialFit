import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object,
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      }
      return <div></div>;
    }
  }

  function mapStatetoProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool.isRequired,
  };

  return connect(mapStatetoProps)(Authentication);
}
