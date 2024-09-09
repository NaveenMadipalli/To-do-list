import React, { useState } from "react";
import Task from "./Task";
import ModalForm from "./ModalForm";
import "../App.css";

const initialTasks = [
  { id: 1, title: "Brainstorming", status: "TODO", priority: "High", date: "2024-09-19" },
  { id: 2, title: "Wireframes", status: "TODO", priority: "High", date: "2024-09-19" },
  { id: 3, title: "Illustrations", status: "IN_PROGRESS", priority: "Low", date: "2024-09-19" },
  { id: 4, title: "Design System", status: "COMPLETED", priority: "Medium", date: "2024-10-12" }
];

function Board() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setModalOpen] = useState(false);

  // Add a new task
  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, { ...newTask, id: Math.random() }]);
  };

  // Update existing task
  const handleUpdateTask = (updatedTask) => {
    setTasks((prev) => prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <div className="board-container">
      <h1>Task Manager</h1>
      <button onClick={() => setModalOpen(true)}>+ Add Task</button>
      <div className="task-columns">
        {["TODO", "IN_PROGRESS", "COMPLETED"].map((status) => (
          <div key={status} className="task-column">
            <h2>{status.replace("_", " ")}</h2>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <Task key={task.id} task={task} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
              ))}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ModalForm
          onClose={() => setModalOpen(false)}
          onSave={handleAddTask}
        />
      )}
    </div>
  );
}

export default Board;
