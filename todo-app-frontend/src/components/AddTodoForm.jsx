import React, { useState } from 'react';
import axios from 'axios';

const AddTodoForm = ({ setTodos }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        if (!title.trim()) return;  
        try {
            const response = await axios.post(`${BASE_API_URL}/todos`, { title });
            setTodos(prev => [...prev, response.data]);
            setTitle('');  
        } catch (error) {
            console.error('Failed to add todo', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a new todo..."
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodoForm;
