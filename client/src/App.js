import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';


const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks').then((response) => setTasks(response.data));
    }, []);

    const handleTaskAdded = (newTask) => setTasks([...tasks, newTask]);
    const handleTaskUpdated = (updatedTask) => setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    const handleTaskDeleted = (deletedTaskId) => setTasks(tasks.filter((t) => t.id !== deletedTaskId));

    return (
        <div>
            <h1>To-Do App</h1>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <TaskList tasks={tasks} onTaskUpdated={handleTaskUpdated} onTaskDeleted={handleTaskDeleted} />
        </div>
    );
};

export default App;
