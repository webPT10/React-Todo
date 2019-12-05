import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoText: ''
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

    render(){
        return (
            <form onSubmit={this.submitHandler} >
                <input 
                    type='text' 
                    name='todoText' 
                    value={this.state.todoText} 
                    onChange={this.changeHandler} 
                />
                <button className='addBtn' type='submit'>Add Todo</button>
                <button className='clearBtn' type='submit'>Clear Completed</button>
            </form>
        )
    }
}
export default TodoForm;