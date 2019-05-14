import React from 'react';
import PropTypes from 'prop-types';

export default function ColorPicker({ colorFunction }) {
  return (
    <>
      <button style={{ backgroundColor: 'red', width: '100px', height: '100px' }} onClick={() => colorFunction('red')}>Red</button>
      <button style={{ backgroundColor: 'yellow', width: '100px', height: '100px' }} onClick={() => colorFunction('yellow')}>yellow</button>
      <button style={{ backgroundColor: 'blue', width: '100px', height: '100px' }} onClick={() => colorFunction('blue')}>blue</button>
    </>
  );
}

ColorPicker.propTypes = {
  colorFunction: PropTypes.string.isRequired
};
