import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('app component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  it('changes color', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().colorClick('red');
    expect(wrapper.state('color')).toEqual('red');
  });
});
