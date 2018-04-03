import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { activateLoginButton, deactivateLoginButton } from './AppActions';

// Import Selector
import { getLoginButton } from './AppReducer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };

    this.activateLoginButton = this.activateLoginButton.bind(this);
    this.deactivateLoginButton = this.deactivateLoginButton.bind(this);
    this.redirectToWelcomePage = this.redirectToWelcomePage.bind(this);
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  activateLoginButton = () => {
    this.props.dispatch(activateLoginButton());
  };

  deactivateLoginButton = () => {
    this.props.dispatch(deactivateLoginButton());
  }

  redirectToWelcomePage = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="Home"
            titleTemplate="%s - SocialFit"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            authenticated={this.props.authenticated} loginButton={this.props.loginButton}
            activateLoginButton={this.activateLoginButton} location={this.props.location}
            deactivateLoginButton={this.deactivateLoginButton}
            redirectToWelcomePage={this.redirectToWelcomePage}
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  loginButton: PropTypes.bool.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    authenticated: store.auth.authenticated,
    loginButton: getLoginButton(store),
  };
}

export default connect(mapStateToProps)(App);
