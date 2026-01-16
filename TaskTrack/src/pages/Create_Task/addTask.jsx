import { FaPlus } from "react-icons/fa";
import React, { useState } from "react";
function AddTask(props) {
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [priorityOptions] = useState(["High", "Medium", "Low"]);
  const [status, setStatus] = useState("TODO");

  const newTask = {
    title,
    description,
    date,
    priority,
    status,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Task Created:", newTask);
    props.onAddTask(newTask);
    setTitle("");
    setDescription("");
    setDate("");
    setPriority("Medium");
    setShowForm(false);
  };
  return (
    <>
      <div
        onClick={() => setShowForm(!showForm)}
        className="cursor-pointer flex items-center gap-2 hover:bg-gray-700 p-2 rounded-lg transition"
      >
        <FaPlus className="text-white text-xl rounded border-2" />
        <span className="text-white font-sarif font-semibold">Add Task</span>
      </div>
      {/*Form Modal*/}
      {showForm && (
        <div className="bg-gray-800 fixed inset-0 items-center justify-center flex z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-700 rounded-xl w-[400px] max-h-[90vh] overflow-y-auto space-y-4"
          >
            <h2 className="text-xl font-bold text-white text-center p-4">
              Add New Task
            </h2>
            <div className="flex flex-col gap-2 mx-4">
              <p className="text-white text-sm">Title</p>
              <input
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 rounded-sm text-white bg-gray-500 w-full"
              />
              <p className="text-white text-sm">Note</p>
              <input
                placeholder="Enter task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 rounded-sm text-white bg-gray-500 w-full h-24 align-text-top"
              />
              <p className="text-white text-sm">Date</p>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 rounded-sm text-white bg-gray-500 w-full"
              />
              <p className="text-white text-sm">Priority</p>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="p-2 rounded-sm text-white bg-gray-500 w-full"
              >
                {priorityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/*Placeholder for buttons*/}
            <div className="flex justify-around gap-3 mb-6 mt-6">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-600 rounded-lg p-2 px-4 text-white hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gray-600 rounded-lg p-2 px-4 text-white hover:bg-gray-500 transition"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AddTask;
