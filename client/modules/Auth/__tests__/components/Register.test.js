import React from 'react';
import Register from '../../components/Register';
import renderer from 'react-test-renderer';

const registerUser = jest.fn(); //eslint-disable-line

describe('Test render & styles', () => {
  test('Register component snapshot', () => {
    const component = renderer.create(
      <Register
        registerUser={registerUser} errorMessage=""
        message=""
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); // eslint-disable-line
  });
});
