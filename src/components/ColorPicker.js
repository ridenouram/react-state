import React, { PureComponent } from 'react';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  
  colorClick = color => {
    this.setState({ color });
  }

  red = {
    backgroundColor: 'red',
    height: '100px',
    width: '100px'
  }
  yellow = {
    backgroundColor: 'yellow',
    height: '100px',
    width: '100px'
  }
  blue = {
    backgroundColor: 'blue',
    height: '100px',
    width: '100px'
  }
 

  render() {
    const { color } = this.state;
    
    return (
      <>
        <button style={this.red} onClick={this.colorClick.bind(null, 'red')}>Red</button>
        <button style={this.yellow} onClick={this.colorClick('yellow')}>Yellow</button>
        <button style={this.blue} onClick={this.colorClick('blue')}>Blue</button>
        <div style={this.red}></div>
      </>
    );
  }
}
