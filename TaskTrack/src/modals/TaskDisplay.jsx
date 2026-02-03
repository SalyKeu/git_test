import { useSmartTask } from "../hooks/useSmartTask";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import AddTask from "../Task/addTask";

// Task Card Component Display
function TaskCard({
  title,
  description,
  date,
  priority,
  status,
  onDragStart,
  task,
  onEditClick,
}) {
  const priorityColors = {
    High: "bg-red-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500",
  };
  const { handleDeleteTask } = useSmartTask();
  const { isAuthenticated, user } = useAuth();


  // Show task if user is the creator (logged in) or if task belongs to guest (not logged in)
  const taskBelongsToUser = isAuthenticated 
    ? task.createdBy === user?.uid 
    : task.createdBy === 'guest';

  if (!taskBelongsToUser) {
    return null;
  }

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onClick={() => onEditClick(task)}
      className="
        bg-white rounded-2xl border-2 border-black p-4
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        cursor-pointer transition-all duration-150
        hover:-translate-x-1 hover:-translate-y-1
        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
        space-y-3
      "
    >
      <div className="flex justify-between items-start gap-2">
        <h3 className="text-black font-bold text-base leading-tight">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          <span
            className={`
              ${priorityColors[priority]}
              text-black text-xs font-semibold
              px-3 py-1 rounded-full whitespace-nowrap
            `}
          >
            {priority}
          </span>

          <button
            className="
              w-7 h-7 rounded-full flex items-center justify-center
              text-gray-400 hover:bg-red-500 hover:text-white
              transition
            "
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteTask(task.id);
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {description && (
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      )}

      <div className="flex justify-between items-center text-xs mt-3">
        <span className="text-gray-400">
          {date ? `Due: ${date}` : "No due date"}
        </span>

        <span
          className="
            bg-gray-100 text-black font-medium
            px-3 py-1 rounded-full
          "
        >
          {status}
        </span>
      </div>
    </div>
  );
}
export default TaskCard;
