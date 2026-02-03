import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./useAuth";

const SmartTaskContext = createContext(undefined);

export function SmartTaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("smart_track.tasks");
    return stored ? JSON.parse(stored) : [];
  });
  const [draggedTask, setDraggedTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("smart_track.tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const handleUpdateTask = (editTask) => {
    setTasks(tasks.map((task) => (task.id === editTask.id ? editTask : task)));
  };

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (draggedTask) {
      setTasks(
        tasks.map((task) =>
          task.id === draggedTask.id ? { ...task, status: newStatus } : task,
        ),
      );
      setDraggedTask(null);
    }
  };

  return (
    <SmartTaskContext.Provider
      value={{
        tasks,
        setTasks,
        handleAddTask,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleDeleteTask,
        handleUpdateTask,
      }}
    >
      {children}
    </SmartTaskContext.Provider>
  );
}

export function useSmartTask(userId) {
  const context = useContext(SmartTaskContext);
  if (!context) {
    throw new Error("useSmartTask must be used within a SmartTaskProvider");
  }
  // Filter tasks: if userId provided, show user's tasks; otherwise show guest tasks
  const userTasks = userId
    ? context.tasks.filter((task) => task.createdBy === userId)
    : context.tasks.filter((task) => task.createdBy === 'guest');
  return { ...context, tasks: userTasks };
}
