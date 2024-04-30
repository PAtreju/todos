import React from 'react';
import axios from 'axios';

const TodoItem = ({ todo, setTodos }) => {
    const toggleCompleted = async () => {
        const updatedTodo = await axios.put(`${BASE_API_URL}/todos/${todo._id}`, {
            completed: !todo.completed
        });
        setTodos(prev => prev.map(t => t._id === todo._id ? updatedTodo.data : t));
    };

    const deleteTodo = async () => {
        await axios.delete(`${BASE_API_URL}/todos/${todo._id}`);
        setTodos(prev => prev.filter(t => t._id !== todo._id));
    };

    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
            </span>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    );
};

export default TodoItem;
