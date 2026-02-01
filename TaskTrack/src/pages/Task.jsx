import AddTask from "../Task/addTask";
import { useSmartTask } from "../hooks/useSmartTask";
import { useState } from "react";

// Edit Task Form Component
function EditTaskForm({ task, onSave, onClose }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState(task.date);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...task,
      title,
      description,
      date,
      priority,
      status,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-2">
        <label className="text-black text-sm font-sans uppercase">Title</label>
        <input
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-white border-black rounded-sm border-2 px-4 py-3 text-black font-medium font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] "
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black text-sm font-sans uppercase">
          Description
        </label>
        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-white border-black rounded-sm border-2 px-4 py-3 text-black font-medium font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          rows="3"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-black text-sm font-sans uppercase">
          Due Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-white border-black rounded-sm border-2 px-4 py-3 text-black font-medium font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-black text-sm font-sans uppercase">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full bg-white border-black rounded-sm border-2 px-4 py-3 text-black font-medium"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-black text-sm font-sans uppercase">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full bg-white border-black rounded-sm border-2 px-4 py-3 text-black font-medium"
          >
            <option>TODO</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
      </div>
      <div className="flex justify-around gap-3 mb-6 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="button-primary button-primary:active"
        >
          Cancel
        </button>
        <button type="submit" className="button-primary button-primary:active">
          Save
        </button>
      </div>
    </form>
  );
}

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

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onClick={() => onEditClick(task)}
      className="bg-white rounded-xl border-2 border-black space-y-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
      transition-all p-4 cursor-pointer active:cursor-pointer
      active:translate-x-0.75 active:translate-y-0.75 active:shadow-none hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="flex justify-between items-start gap-2">
        <h3 className="text-black font-bold text-md">{title}</h3>
        <span
          className={`${priorityColors[priority]} text-black text-xs px-2 py-1 rounded-full shrink-0`}
        >
          {priority}
        </span>
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteTask(task.id);
          }}
        >
          ✕
        </button>
      </div>
      <p className="text-gray-300 text-sm">{description}</p>
      <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
        <span>{date ? "Due date: " + date : "No due date"}</span>
        <span className="bg-white container-primary text-black px-2 py-1 rounded">
          {status}
        </span>
      </div>
    </div>
  );
}

function Task() {
  const {
    tasks,
    handleAddTask,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleUpdateTask,
  } = useSmartTask();

  const [editingTask, setEditingTask] = useState(null);

  const handleEditClick = (task) => {
    setEditingTask(task);
  };

  const handleEditSave = (updatedTask) => {
    handleUpdateTask(updatedTask);
    setEditingTask(null);
  };

  return (
    <main className="w-full min-h-screen bg-white text-black font-sans">
      <div className="w-full max-w-6xl mx-auto py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* TODO Column */}
          <div
            className="flex flex-col bg-white rounded-xl task-container min-h-150 overflow-hidden"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "TODO")}
          >
            {/* Header */}
            <div className="border-b-4 flex justify-between items-center py-4">
              <h2 className="text-md font-bold text-black ml-4">TODO</h2>
              <AddTask onAddTask={handleAddTask} className="mr-4" />
            </div>
            {/* Task Cards */}
            <div className="space-y-3 p-4">
              {tasks
                .filter((task) => task.status === "TODO")
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    date={task.date}
                    priority={task.priority}
                    status={task.status}
                    task={task}
                    onEditClick={handleEditClick}
                    onDragStart={(e) => handleDragStart(e, task)}
                  />
                ))}
            </div>
          </div>
          {/* In Progress Column */}
          <div
            className="flex flex-col bg-white rounded-xl task-container min-h-150 overflow-hidden"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "In Progress")}
          >
            {/* Header */}
            <div className="border-b-4 flex justify-between items-center py-4">
              <h2 className="text-md font-bold text-black ml-4">In Progress</h2>
            </div>
            {/* Task Cards */}
            <div className="space-y-3 p-4">
              {tasks
                .filter((task) => task.status === "In Progress")
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    date={task.date}
                    priority={task.priority}
                    status={task.status}
                    task={task}
                    onEditClick={handleEditClick}
                    onDragStart={(e) => handleDragStart(e, task)}
                  />
                ))}
            </div>
          </div>
          {/* Done Column */}
          <div
            className="flex flex-col bg-white rounded-xl task-container min-h-150 overflow-hidden"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "Done")}
          >
            {/* Header */}
            <div className="border-b-4 flex justify-between items-center py-4">
              <h2 className="text-md font-bold text-black ml-4">Done</h2>
            </div>
            {/* Task Cards */}
            <div className="space-y-3 p-4">
              {tasks
                .filter((task) => task.status === "Done")
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    date={task.date}
                    priority={task.priority}
                    status={task.status}
                    task={task}
                    onEditClick={handleEditClick}
                    onDragStart={(e) => handleDragStart(e, task)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingTask && (
        <div className="bg-white/40 backdrop-blur-[3px] fixed inset-0 items-center justify-center flex z-50">
          <div className="bg-white w-[400px] max-h-[90vh] overflow-y-auto space-y-4 task-container rounded-xl p-4">
            <h3 className="text-2xl font-bold text-black text-center p-4 font-sans uppercase">
              Edit Task
            </h3>
            <EditTaskForm
              task={editingTask}
              onSave={handleEditSave}
              onClose={() => setEditingTask(null)}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Task;
