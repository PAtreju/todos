import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get(`${BASE_API_URL}/todos`);
            setTodos(response.data);
        };
        fetchTodos();
    }, []);

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} setTodos={setTodos} />
            ))}
        </div>
    );
};

export default TodoList;
