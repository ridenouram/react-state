import React, { PureComponent } from 'react';
import randomColor from 'randomcolor';

export default class RandomColor extends PureComponent {
  state = {
    color: ''
  }

  //change color function
  randomize = () => {
    const color = randomColor();
    this.setState({ color });
  }

  //life cycle
  componentDidMount() {
    setInterval(this.randomize, 1000);
  }

  //renders div
  render() {
    const { color } = this.state;

    return (
      <div style={{ background: color, width: '100px', height: '100px' }} />
    );
  }
}
