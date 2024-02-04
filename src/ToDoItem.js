import React from 'react';

const ToDoItem = ({ item, index, handleItemDone, handleItemDelete }) => (
    <div className='item'>
        <li
            onClick={() => handleItemDone(index)}
            className={item.completed ? 'completed' : ''}
        >
            {item.inputText}
        </li>
        <span className='delete-button' onClick={() => handleItemDelete(index)}>❌</span>
    </div>
);

export default ToDoItem;
