import AddTask from "../Task/addTask";
import { useSmartTask } from "../hooks/useSmartTask";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import TaskCard from "../modals/TaskDisplay";
import EditTaskForm from "../modals/EditTask";

function Task() {
  const { user } = useAuth();
  const {
    tasks,
    handleAddTask,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleUpdateTask,
  } = useSmartTask(user?.uid);

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
            onDrop={(e) => handleDrop(e, "IN PROGRESS")}
          >
            {/* Header */}
            <div className="border-b-4 flex justify-between items-center py-4">
              <h2 className="text-md font-bold text-black ml-4">IN PROGRESS</h2>
              <AddTask onAddTask={handleAddTask} className="mr-4" />
            </div>
            {/* Task Cards */}
            <div className="space-y-3 p-4">
              {tasks
                .filter((task) => task.status === "IN PROGRESS")
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
            onDrop={(e) => handleDrop(e, "DONE")}
          >
            {/* Header */}
            <div className="border-b-4 flex justify-between items-center py-4">
              <h2 className="text-md font-bold text-black ml-4">DONE</h2>
              <AddTask onAddTask={handleAddTask} className="mr-4" />
            </div>
            {/* Task Cards */}
            <div className="space-y-3 p-4">
              {tasks
                .filter((task) => task.status === "DONE")
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
          <div className="bg-white w-100 max-h-[90vh] overflow-y-auto space-y-4 task-container rounded-xl p-4">
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
