import { FaPlus } from "react-icons/fa";
function AddTask() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      onClick={handleSubmit}
      className="cursor-pointer flex items-center gap-2 hover:bg-gray-700 p-2 rounded-lg transition"
    >
      <div className="space-y-3">
        <FaPlus className="text-white text-xl rounded border-2" />
      </div>
      <span className="text-white font-sarif font-semibold">Add Task</span>
    </div>
  );
}

export default AddTask;
