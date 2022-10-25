import React from 'react';
import Controls from './Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };

  handelIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handelDicrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };
  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <Controls
          onDecrement={this.handelDicrement}
          onIncrement={this.handelIncrement}
        />
      </div>
    );
  }
}

export default Counter;
