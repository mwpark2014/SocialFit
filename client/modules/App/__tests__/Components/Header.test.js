import React from 'react';
import Header from '../../components/Header/Header';
import renderer from 'react-test-renderer';

const activateLoginButton = () => {
};

const deactivateLoginButton = () => {
};

const redirectToWelcomePage = () => {
};

test('Header snapshot', () => {
  const component = renderer.create(
    <Header
      authenticated={false} activateLoginButton={activateLoginButton}
      deactivateLoginButton={deactivateLoginButton} loginButton
      redirectToWelcomePage={redirectToWelcomePage} location={{ pathname: '/' }}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot(); // eslint-disable-line
});
