import React, { useState } from 'react';
import { addTask } from '../api';

const AddTaskForm = ({ refreshTasks }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !category.trim()) {
            setError('Both title and category are required.');
            return;
        }

        try {
            const task = { title: title.trim(), category: category.trim(), completed: false };
            await addTask(task); // Attendre que la tâche soit ajoutée
            await refreshTasks(); // Rafraîchir la liste des tâches
            setTitle('');
            setCategory('');
            setError('');
        } catch (err) {
            setError('Failed to add task. Please try again.');
        }
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                    if (error) setError('');
                }}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value);
                    if (error) setError('');
                }}
            />
            <button type="submit" disabled={!title.trim() || !category.trim()}>
                Add Task
            </button>
            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

export default AddTaskForm;
