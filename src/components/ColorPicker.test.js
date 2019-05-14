import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('colorpicker component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ColorPicker colorFunction={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('selects red on button click', () => {
    const mock = jest.fn();
    const wrapper = shallow(<ColorPicker colorFunction={mock} />);
    wrapper.find('button').at(0).simulate('click');
    expect(mock).toHaveBeenCalledWith('red');
  });

  it('selects yellow on button click', () => {
    const mock = jest.fn();
    const wrapper = shallow(<ColorPicker colorFunction={mock} />);
    wrapper.find('button').at(1).simulate('click');
    expect(mock).toHaveBeenCalledWith('yellow');
  });

  it('selects blue on button click', () => {
    const mock = jest.fn();
    const wrapper = shallow(<ColorPicker colorFunction={mock} />);
    wrapper.find('button').at(2).simulate('click');
    expect(mock).toHaveBeenCalledWith('blue');
  });
});

