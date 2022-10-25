import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionInd: 0,
  };

  makeOptionsClassName = index => {
    const optionClasses = ['options'];
    if (index === this.state.activeOptionInd) {
      optionClasses.push('options--active');
    }
    return optionClasses.join(' ');
  };

  setActiveInx = index => {
    this.setState({ activeOptionInd: index });
  };

  render() {
    const { activeOptionInd } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionInd];
    return (
      <div>
        <h2>Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div className="container">
          {options.map(({ label, color }, index) => (
            <span
              className={this.makeOptionsClassName(index)}
              key={label}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveInx(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
