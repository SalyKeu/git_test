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
  const [statusOptions] = useState(["TODO", "In Progress", "Done"]);

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
        className="rounded border-2 border-black 
        p-0.5 active:translate-x-0.75 active:translate-y-0.75 active:shadow-none transition-all mr-4"
      >
        <FaPlus className="text-black size-3" />
        {/* <span className="text-black font-sarif font-semibold">Add Task</span> */}
      </div>
      {/*Form Modal*/}
      {showForm && (
        <div className="bg-white/40 backdrop-blur-[3px] fixed inset-0 items-center justify-center flex z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-700 rounded-xl w-[400px] max-h-[90vh] overflow-y-auto space-y-4"
          >
            <h2 className="text-xl font-bold text-black text-center p-4 font-sans uppercase">
              Add New Task
            </h2>
            <div className="flex flex-col gap-2 mx-4">
              <p className="text-black text-sm font-sans uppercase">Title</p>
              <input
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-white border-black rounded-sm border-2  px-4 py-3 text-black font-medium font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              />
              <p className="text-black text-sm font-sans uppercase">Note</p>
              <textarea
                placeholder="Enter task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-white border-black rounded-sm border-2 px-4 py-3 text-black font-medium font-sans 
                focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              />
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <p className="text-black text-sm font-sans uppercase">Date</p>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="p-2 rounded-sm text-black bg-gray-500 w-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-black text-sm font-sans uppercase ml-16">
                    Priority
                  </p>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="p-2 rounded-sm text-black bg-gray-500 w-full"
                  >
                    {priorityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="text-black text-sm font-sans uppercase">Status</p>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="p-2 rounded-sm text-black bg-gray-500 w-full"
              >
                {statusOptions.map((option) => (
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
                className="bg-gray-600 rounded-lg p-2 px-4 text-black hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gray-600 rounded-lg p-2 px-4 text-black hover:bg-gray-500 transition"
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
