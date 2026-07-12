import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignTo, setAssignTo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedEmployees = userData.employees.map((emp) => {
      if (
        emp.firstName.toLowerCase() === assignTo.trim().toLowerCase()
      ) {
        return {
          ...emp,
          taskCount: {
            ...emp.taskCount,
            newTask: emp.taskCount.newTask + 1,
          },
          tasks: [...emp.tasks, task],
        };
      }

      return emp;
    });

    const updatedData = {
      ...userData,
      employees: updatedEmployees,
    };

    setUserData(updatedData);

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setAssignTo("");

    alert("Task Created Successfully");
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between mt-5"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-xl text-gray-300 mb-1">
              Task Title
            </h3>

            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="rounded-xl bg-white text-black w-4/5 py-2 px-3 mb-4 outline-none"
              type="text"
              placeholder="Task Title"
              required
            />
          </div>

          <div>
            <h3 className="text-xl text-gray-300 mb-1">
              Date
            </h3>

            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="rounded-xl bg-white text-black w-4/5 py-2 px-3 mb-4 outline-none"
              type="date"
              required
            />
          </div>

          <div>
            <h3 className="text-xl text-gray-300 mb-1">
              Assign To
            </h3>

            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="rounded-xl bg-white text-black w-4/5 py-2 px-3 mb-4 outline-none"
              type="text"
              placeholder="Employee Name"
              required
            />
          </div>

          <div>
            <h3 className="text-xl text-gray-300 mb-1">
              Category
            </h3>

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl bg-white text-black w-4/5 py-2 px-3 mb-4 outline-none"
              type="text"
              placeholder="Design / Development"
              required
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col">
          <h3 className="text-xl text-gray-300 mb-1">
            Description
          </h3>

          <textarea
            value={taskDescription}
            onChange={(e) =>
              setTaskDescription(e.target.value)
            }
            className="w-full h-44 rounded-xl bg-white text-black p-3 outline-none"
            required
          />

          <button
            className="rounded-xl py-3 mt-5 bg-emerald-500 hover:bg-emerald-600"
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;