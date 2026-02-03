import AddTask from "../Task/addTask";
import { useSmartTask } from "../hooks/useSmartTask";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

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
            <option>IN PROGRESS</option>
            <option>DONE</option>
          </select>
        </div>
      </div>
      <div className="flex justify-around gap-3 mb-6 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="button-primary button-primary:active"
        >
          CANCEL
        </button>
        <button type="submit" className="button-primary button-primary:active">
          SAVE
        </button>
      </div>
    </form>
  );
}
export default EditTaskForm;
