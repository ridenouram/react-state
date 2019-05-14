import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ColorDisplay color="red" />);
    expect(wrapper).toMatchSnapshot();
  });
});

