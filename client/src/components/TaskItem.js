import React from 'react';
import { format } from 'date-fns';

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
    // Format the due date to a readable format
    const formattedDate = task.due_date
        ? format(new Date(task.due_date), 'MMM dd, yyyy')
        : 'No Due Date';

    // Handle delete with confirmation
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            onTaskDeleted(task.id);
        }
    };

    return (
        <li>
            <div className="task-content">
                <span className="task-title">{task.title}</span>
                <p>{task.description}</p>
                <p className="task-due-date">Due: {formattedDate}</p>
            </div>
            <button
                className={task.completed ? 'undo-btn' : 'complete-btn'} // Dynamically apply class
                onClick={() => onTaskUpdated({ ...task, completed: !task.completed })}
            >
                {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TaskItem;

