import React from 'react';

import { toDos } from './data';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      message: 'From App this.state',
      toDos: toDos
    };
  }
  
  addItem = (todoText) => {
    const newTodo = {
      task: todoText,
      id: Date.now(),
      completed: false
    }

    this.setState({
      toDos:[...this.state.toDos, newTodo]
    })
  }

  render() {
    console.log(this.state.toDos)
    return (
      <div>
        <div>
          <h2>{this.state.message}</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList toDos={this.state.toDos} />
      </div>
    );
  }
}

export default App;
