import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="h-full flex-shrink-0 w-[250px] bg-red-700 p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>

        <h4>{data.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-xl font-semibold">
        {data.taskTitle}
      </h2>

      <p className="text-sm mt-5">
        {data.taskDescription}
      </p>

      <div className="mt-5">
        <button className="w-full bg-green-700 cursor-pointer py-2 rounded">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;