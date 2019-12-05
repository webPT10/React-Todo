import React from 'react';

import './Todo.css';

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
      message: 'To-Do List',
      toDos: toDos
    };
  }
  
  toggleItem = todoId => {
    console.log('Here!', todoId)
    this.setState({ toDos: this.state.toDos.map(item => {
      if (todoId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })})
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
      <div className='App'>
        <div className='header'>
          <h2>{this.state.message}</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList toDos={this.state.toDos} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
