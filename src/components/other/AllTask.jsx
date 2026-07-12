import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useContext(AuthContext);

  if (!userData) return null;

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-700 py-2 mb-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h3 className="w-1/5">Active Task</h3>
        <h3 className="w-1/5">Completed</h3>
        <h3 className="w-1/5">Failed</h3>
      </div>

      <div className="h-[80%] overflow-auto">
        {userData.employees.map((emp, idx) => (
          <div
            key={idx}
            className="bg-emerald-700 py-2 mb-2 px-4 flex justify-between rounded"
          >
            <h2 className="w-1/5">{emp.firstName}</h2>
            <h2 className="w-1/5 text-blue-500">
              {emp.taskCount.newTask}
            </h2>
            <h2 className="w-1/5 text-yellow-500">
              {emp.taskCount.active}
            </h2>
            <h2 className="w-1/5 text-green-500">
              {emp.taskCount.completed}
            </h2>
            <h2 className="w-1/5 text-red-700">
              {emp.taskCount.failed}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;