import React from 'react';

const Todo = props => {
    return (
        <div onClick={(event) => props.toggleItem(props.item.id)}>
            {props.item.task}
        </div>
    )
}
export default Todo;