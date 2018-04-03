import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';

const props = {
  loginButton: true,
  authenticated: false,
  children: [],
  dispatch: () => {},
  history: {},
  location: {},
};

test('renders properly', () => {
  const wrapper = shallow(
    <App {...props} />
  );

  expect(wrapper.find('Header').length).toBe(1); //eslint-disable-line
  expect(wrapper.find('Footer').length).toBe(1); //eslint-disable-line
});
