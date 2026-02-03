import { FaPlus } from "react-icons/fa";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";

function AddTask(props) {
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("TODO");
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTask({
      title,
      description,
      date,
      priority,
      status,
      createdBy: user ? user.uid : "guest",
    });
    setTitle("");
    setDescription("");
    setDate("");
    setPriority("Medium");
    setStatus("TODO");
    setShowForm(false);
  };

  return (
    <>
      <div
        onClick={() => setShowForm(!showForm)}
        className="rounded border-2 border-black p-0.5 active:translate-x-0.75 active:translate-y-0.75 active:shadow-none transition-all mr-4"
      >
        <FaPlus className="text-black size-3" />
      </div>
      {showForm && (
        <div className="bg-white/40 backdrop-blur-[3px] fixed inset-0 items-center justify-center flex z-50">
          <div className="bg-white w-100 max-h-[90vh] overflow-y-auto space-y-4 task-container rounded-xl p-4">
            <h3 className="text-2xl font-bold text-black text-center p-4 font-sans uppercase">
              Add New Task
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-black text-sm font-sans uppercase">
                  Title
                </label>
                <input
                  placeholder="Enter task title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full bg-white border-black rounded-sm border-2 px-4 py-3 text-black font-medium font-sans focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
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
                    className="w-full bg-white border-black rounded-sm border-2 px-4 py-3 text-black font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
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
                    className="w-full bg-white border-black rounded-sm border-2 px-4 py-3 text-black font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
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
                  onClick={() => setShowForm(false)}
                  className="button-primary button-primary:active"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="button-primary button-primary:active"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTask;
