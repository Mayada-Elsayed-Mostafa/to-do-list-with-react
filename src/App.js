import React, { useRef, useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const inputRef = useRef();

  const handleAddToDo = () => {
    const inputText = inputRef.current.value;
    const inputItem = { completed: false, inputText };
    setToDos([...toDos, inputItem]);
    inputRef.current.value = "";
  }

  const handleItemDone = (index) => {
    const newToDos = [...toDos];
    newToDos[index].completed = !newToDos[index].completed;
    setToDos(newToDos);
  }

  const handleItemDelete = (index) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1)
    setToDos(newToDos);
  }

  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat(
      'en-US',
      { weekday: 'long' }
    ).format(date);
  }

  return (
    <div className="App">
      <h2>My To Do List for {formatDate(today)}</h2>

      <ToDoList
        toDos={toDos}
        handleItemDone={handleItemDone}
        handleItemDelete={handleItemDelete}
      />

      <input ref={inputRef} placeholder='Enter what you want to do...'></input>
      <button onClick={handleAddToDo}>Add</button>
    </div>
  );
}

export default App;
