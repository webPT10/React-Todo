import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoText: '',
            completed: ''
        }
    }
    changeHandler = event => {
        this.setState({todoText: event.target.value})
    }
    submitHandler = event => {
        event.preventDefault();
        this.props.addItem(this.state.todoText);
        this.setState({ todoText:'' })
    }
    clearHandler = event => {
        event.preventDefault();
        this.props.clearItem();
        this.setState({completed: ''})
    }

    render(){
        return (
            <div className='todo-form'>
                <form onSubmit={this.submitHandler} >
                    <input 
                        type='text' 
                        name='todoText' 
                        value={this.state.todoText} 
                        onChange={this.changeHandler} 
                    />
                    <button className='addBtn' type='submit'>Add Todo</button>
                </form>
                <form onSubmit={this.clearHandler}>
                    <button className='clearBtn' type='submit'>Clear Completed</button>
                </form>
            </div>
        )
    }
}
export default TodoForm;