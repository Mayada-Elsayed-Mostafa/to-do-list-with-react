import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDos, handleItemDone, handleItemDelete }) => (
    <ul>
        {toDos.map((item, index) => (
            <ToDoItem
                key={index}
                item={item}
                index={index}
                handleItemDone={handleItemDone}
                handleItemDelete={handleItemDelete}
            />
        ))}
    </ul>
);

export default ToDoList;
