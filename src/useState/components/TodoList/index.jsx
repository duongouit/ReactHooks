// REMOVE TODO LIST
import React from 'react';
import PropTypes from 'prop-types';

ToDoList.propTypes = {
    todos: PropTypes.array,
    onToDoClick: PropTypes.func,
};
ToDoList.defaultProps = {
    todos: [],
    onToDoClick: null,
}
function ToDoList(props) {
    const {todos,onToDoClick} = props;
    function handleClick(id) {
        onToDoClick(id);
    }
    return (
        <div>
            <ul className="todo-list">
                {todos.map((item,index) => (
                    <li key={index} onClick={()=> handleClick(item.id)}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;