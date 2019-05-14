import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders a ColorPicker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });


  //copied from ryan's demo
  it('changes color to red on button press', () => {
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.state('color')).toEqual('red');
  });

  it('changes color to yellow on button press', () => {
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(1).simulate('click');

    expect(wrapper.state('color')).toEqual('yellow');
  });

  it('changes color to blue on button press', () => {
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(2).simulate('click');

    expect(wrapper.state('color')).toEqual('blue');
  });
});
