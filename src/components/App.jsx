import React, { Component } from 'react';
// import TodoEditor from './toDoEditor/ToDoEditor';
import Modal from './modal/Modal';

// import Counter from './counter/Counter';
// import DropDown from './dropDown/DropDown';
// import ColorPicker from './colorPicker/ColorPicker';
// import { ToDoList } from './toDoList/ToDoList';
// import { Form } from './Form';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#5cf436' },
//   { label: 'blue', color: '#3669f4' },
//   { label: 'grey', color: '#6a6b6a' },
//   { label: 'pink', color: '#f436a5' },
//   { label: 'indigo', color: '#2d3af3' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: true },
      { id: 'id-2', text: 'Todo 2', completed: false },
      { id: 'id-3', text: 'Todo 3', completed: false },
    ],
    showModal: false,
  };

  // addTodo = text => {
  //   console.log(text);
  //   this.setState(prev => {
  //     return {
  //       todos: [...prev.todos, { id: '6', text: text, completed: false }],
  //     };
  //   });
  // };
  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };
  // onToggleCompleted = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.map(todo => {
  //       if (todo.id === todoId) {
  //         console.log('Find It');
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         };
  //       }
  //       return todo;
  //     }),
  //   }));
  // };
  toggleShowModale = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    // const { todos } = this.state;
    // const completedTodo = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0
    // );
    return (
      <>
        <button type="button" onClick={this.toggleShowModale}>
          Open modal
        </button>
        {this.state.showModal && (
          <Modal onClose={this.toggleShowModale}>
            <h1>This is a content in Modal</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sunt, suscipit eveniet ipsum tempore dolorem eligendi
              aut dolore, vel, ex sit dignissimos necessitatibus quibusdam
              perferendis nihil odit illo neque officiis.
            </p>
            <button type="button" onClick={this.toggleShowModale}>
              Close modal
            </button>
          </Modal>
        )}

        {/* <h1>TODO LIST</h1>
        <TodoEditor onSubmit={this.addTodo} />
        <div>
          <p>Total : {todos.length}</p>
          <p>Total completed : {completedTodo}</p>
        </div>
        <ToDoList
          todos={todos}
          onToggleCompleted={this.onToggleCompleted}
          onDeleteTodo={this.deleteTodo}
        /> */}
      </>
    );
  }
}

export default App;
