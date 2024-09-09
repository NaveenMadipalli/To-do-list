import React, { useState } from "react";

function ModalForm({ onClose, onSave }) {
  const [newTask, setNewTask] = useState({
    title: "",
    status: "TODO",
    priority: "Low",
    date: "",
  });

  // Handle task creation
  const handleSubmit = () => {
    onSave(newTask);
    onClose();
  };

  return (
    <div className="modal">
      <h3>Create a New Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <select value={newTask.status} onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}>
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
      <select value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={newTask.date}
        onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
      />
      <div className="modal-actions">
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ModalForm;
