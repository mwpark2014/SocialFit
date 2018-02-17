import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Button } from 'reactstrap';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  let logButton = null;
  if (context.router.isActive('/', true)) {
    logButton = props.loginButton
    ? <Button href="#" className={styles.loginButton} onClick={props.deactivateLoginButton}> Sign in </Button>
    : <Button href="#" className={styles.loginButton} onClick={props.activateLoginButton}> Register </Button>;
  } else {
    logButton = props.authenticated
    ? <Button href="#" className={styles.loginButton} onClick={props.redirectToWelcomePage}> Log out </Button>
    : <Button href="#" className={styles.loginButton} onClick={props.redirectToWelcomePage}> Sign in </Button>;
  }

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" ><h1>SocialFit</h1></Link>
        </h1>
        {logButton}
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  activateLoginButton: PropTypes.func.isRequired,
  deactivateLoginButton: PropTypes.func.isRequired,
  redirectToWelcomePage: PropTypes.func.isRequired,
  loginButton: PropTypes.bool.isRequired,
};

export default Header;
