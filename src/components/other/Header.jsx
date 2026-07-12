import React from "react";

const Header = ({ changeUser, data }) => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    changeUser("");
  };

  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium">
        Welcome back,
        <br />
        <span className="text-3xl font-semibold">
          {data ? data.firstName : "Admin"}
        </span>{" "}
        👋
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-500 text-white px-5 py-2 rounded cursor-pointer"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;