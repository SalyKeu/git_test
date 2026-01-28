import React, { useState } from "react";
import AddTask from "./Create_Task/addTask";

// Task card component
function TaskCard({ title, description, date, priority, status }) {
  const priorityColors = {
    High: "bg-red-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500",
  };

  return (
    <div className="rounded bg-gray-700 p-4 shadow-lg shadow-gray-300/50 space-y-2">
      <div className="flex justify-between items-start gap-2">
        <h3 className="text-white font-bold text-md">{title}</h3>
        <span
          className={`${priorityColors[priority]} text-white text-xs px-2 py-1 rounded-full shrink-0`}
        >
          {priority}
        </span>
      </div>
      <p className="text-gray-300 text-sm">{description}</p>
      <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
        <span>{"Due" + date || "No due date"}</span>
        <span className="bg-gray-600 text-white px-2 py-1 rounded">
          {status}
        </span>
      </div>
    </div>
  );
}

function Task() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (newTasks) => {
    setTasks([...tasks, newTasks]);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-900">
      <div className="rounded-xl p-10 shadow-lg bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TODO Column */}
          <div className="bg-gray-800 rounded-xl p-6 min-h-[500px]">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="flex-grow text-lg font-semibold text-white text-center">
                TODO
              </h2>
              <AddTask onAddTask={handleAddTask} />
            </div>

            <div className="space-y-3">
              {tasks
                .filter((task) => task.status === "TODO")
                .map((task, index) => (
                  <TaskCard
                    key={index}
                    title={task.title}
                    description={task.description}
                    date={task.date}
                    priority={task.priority}
                    status={task.status}
                  />
                ))}
            </div>
          </div>

          {/* In Progress Column */}
          <div className="bg-gray-800 rounded-xl p-6 min-h-[500px]">
            <h2 className="text-lg font-semibold text-white text-center mb-4">
              In Progress
            </h2>
            <div className="space-y-3">
              {tasks
                .filter((task) => task.status === "In Progress")
                .map((task, index) => (
                  <TaskCard
                    key={index}
                    title={task.title}
                    description={task.description}
                    date={task.date}
                    priority={task.priority}
                    status={task.status}
                  />
                ))}
            </div>
          </div>

          {/* Done Column */}
          <div className="bg-gray-800 rounded-xl p-6 min-h-[500px]">
            <h2 className="text-lg font-semibold text-white text-center mb-4">
              Done
            </h2>
            <div className="space-y-3">
              {tasks
                .filter((task) => task.status === "Done")
                .map((task, index) => (
                  <TaskCard
                    key={index}
                    title={task.title}
                    description={task.description}
                    date={task.date}
                    status={task.status}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
