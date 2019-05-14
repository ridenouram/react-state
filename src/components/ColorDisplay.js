import React from 'react';
import PropTypes from 'prop-types';

export default function ColorDisplay({ color }) {
  return (
    <div style={{ backgroundColor: color, width: '100px', height: '100px1' }}></div>
  );
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};
