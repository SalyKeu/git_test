import AddTask from "./Create_Task/addTask";

// Task card component (optional but cleaner)
function TaskCard({ title, description }) {
  return (
    <div className="rounded bg-gray-700 p-4 shadow-lg shadow-gray-300/50">
      <h3 className="text-white font-bold text-md">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

function Task() {
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
              <AddTask />
            </div>

            {/* Tasks */}
            <TaskCard
              title="Sample Task"
              description="This is a description of the sample task."
            />

            {/* Task creation form */}
          </div>

          {/* In Progress Column */}
          <div className="bg-gray-800 rounded-xl p-6 min-h-[500px]">
            <h2 className="text-lg font-semibold text-white text-center mb-4">
              In Progress
            </h2>
            {/* In Progress Tasks */}
          </div>

          {/* Done Column */}
          <div className="bg-gray-800 rounded-xl p-6 min-h-[500px]">
            <h2 className="text-lg font-semibold text-white text-center mb-4">
              Done
            </h2>
            {/* Done Tasks */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
