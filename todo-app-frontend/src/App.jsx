import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
