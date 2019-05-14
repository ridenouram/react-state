import React, { PureComponent } from 'react';

export default class Incrementer extends PureComponent {
  state = {
    count: 0
  };

  buttonClick = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <div>Times pressed: {count} </div>
        <button className='myButton' onClick={() => this.buttonClick()}>Increment</button>
      </>
    );
  }
}
