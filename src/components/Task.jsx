import React, { useState } from "react";

function Task({ task, onUpdate, onDelete }) {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  // Save task changes
  const handleSave = () => {
    onUpdate(editedTask);
    setEditing(false);
  };

  return (
    <div className="task-card">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          />
          <select
            value={editedTask.status}
            onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
          >
            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">IN PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h4>{task.title}</h4>
          <p>Priority: {task.priority}</p>
          <p>Due: {task.date}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Task;
