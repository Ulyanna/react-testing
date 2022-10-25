import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
  };

  handlerChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };
  render() {
    return (
      <>
        <form action="" onSubmit={this.onSubmit}>
          <label>
            Имя
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handlerChange}
            />
          </label>
          <label>
            Прозвище
            <input
              name="tag"
              type="text"
              value={this.state.tag}
              onChange={this.handlerChange}
            />
          </label>
          <button type="submit">Отправить</button>
        </form>
      </>
    );
  }
}
