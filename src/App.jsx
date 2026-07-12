import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const { userData } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      setUser(loggedInUser.role);

      if (loggedInUser.role === "employee") {
        setLoggedInUserData(loggedInUser.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!userData.admin.length) return;

    const admin = userData.admin[0];

    if (email === admin.email && password === admin.password) {
      setUser("admin");

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin",
        })
      );

      return;
    }

    const employee = userData.employees.find(
      (emp) => emp.email === email && emp.password === password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employee,
        })
      );
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === "employee" && (
        <EmployeeDashboard
          data={loggedInUserData}
          changeUser={setUser}
        />
      )}
    </>
  );
};

export default App;