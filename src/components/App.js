import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

export default class App extends PureComponent {
  state = {
    color: ''
  };

  colorClick = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <>
        <ColorPicker colorFunction={this.colorClick} />
        <ColorDisplay color={ color } />
      </>
    );
  }

  componentDidUpdate() {
    const { color } = this.state;
    console.log(color);
  }
}
