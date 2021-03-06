// api
import { deleteTask } from "../api";

export default function TaskViewer({ tasks, rerender }) {
  // methods

  /**
   * Deleted a task from firebase (firebase doesn't delete inner timesheets though)
   * @param {Object} task firebase docref for a task
   */

  const removeTask = async (taskId) => {
    deleteTask(taskId)
      .then((data) => {
        console.log("Document deleted succesfully");
        rerender();
      })
      .catch((error) => console.error("Deleting", error));
  };

  return (
    <div
      className={`
    bg-gray-800
    shadow-lg
    rounded
    bg-opacity-50
    p-6`}
    >
      <div>
        {/* Tasks list */}
        <ul className="flex flex-col divide-y">
          {tasks?.map((task, index) => (
            <li
              key={`task-${index}`}
              className="flex flex-row py-4 items-center justify-between"
            >
              {/* Color & Name */}
              <div className="flex flex-row items-center gap-x-4">
                <div
                  className="rounded p-3 shadow-lg"
                  style={{ backgroundColor: task.data().color.hex }}
                />
                <span className="text-gray-200">{task.data().name}</span>
              </div>

              {/* X button */}
              <button
                className="text-gray-600 h-5 w-5 hover:text-indigo-500 focus:outline-none"
                onClick={() => removeTask(task.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
