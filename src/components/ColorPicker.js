import React from 'react';
import PropTypes from 'prop-types';

export default function ColorPicker({ colorFunction }) {
  return (
    <>
      <button style={{ backgroundColor: 'red', width: '75px', height: '50px' }} onClick={() => colorFunction('red')}>Red</button>
      <button style={{ backgroundColor: 'yellow', width: '75px', height: '50px' }} onClick={() => colorFunction('yellow')}>yellow</button>
      <button style={{ backgroundColor: 'blue', width: '75px', height: '50px' }} onClick={() => colorFunction('blue')}>blue</button>
    </>
  );
}

ColorPicker.propTypes = {
  colorFunction: PropTypes.func.isRequired
};
