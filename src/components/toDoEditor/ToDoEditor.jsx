import React, { Component } from 'react';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handelChange = e => {
    this.setState({ message: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state.message);
    this.reset();
  };
  reset = () => {
    this.setState({
      message: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handelChange}
        ></textarea>
        <button
          type="
            submit"
        >
          Add
        </button>
      </form>
    );
  }
}
export default TodoEditor;
