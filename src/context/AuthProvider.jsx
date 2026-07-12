import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employees: [],
    admin: [],
  });

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const data = getLocalStorage();

    setUserData(data);
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;