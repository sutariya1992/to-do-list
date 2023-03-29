import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div className='main-box'>
      <div className='detail'>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new to-do item"
        />
        <button onClick={handleAddTodo}>Add Item</button>
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default TodoList;
