import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './App';

describe('incrementer component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('increments counter on button press', () => {
    const wrapper = shallow(<Incrementer />);
    wrapper.find('myButton').simulate('click');
    expect(wrapper.state('count').toEqual(1));
  });
});

