import React from 'react';

const TaskItem = ({ task }) => {
    return (
        <div className="task-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {}} // Ajouter une fonction pour marquer la tâche comme terminée si nécessaire
            />
            <span>{task.title}</span>
        </div>
    );
};

export default TaskItem;
