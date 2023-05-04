// AuthContext.js

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUserData] = useState(null);

  const [authToken, setAuthToken] = useState(null);

  const login = (token, newUser) => {
    setIsLoggedIn(true);
    setUserData(user);
    setAuthToken(token);
    // save on local storage
    localStorage.setItem(
      "AuthContext",
      JSON.stringify({ authToken: token, user: newUser, isLoggedIn: true })
    );
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const getStoredData = () => {
    const result = { authToken: null, user: null, isLoggedIn: false };
    try {
      let localStorageData = localStorage.getItem("AuthContext");
      localStorageData = JSON.parse(localStorageData);

      // const { authToken, user, isLoggedIn } = localStorageData;
      console.log({ localStorageData });

      result.authToken = localStorageData.authToken;
      result.user = localStorageData.user;
      result.isLoggedIn = localStorageData.isLoggedIn;

      setIsLoggedIn(localStorageData.isLoggedIn);
      setUserData(localStorageData.user);
      setAuthToken(localStorageData.authToken);
    } catch (ex) {}
    return result;
  };

  useEffect(() => {
    console.log("// retrive from local storage");
    getStoredData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        authToken,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
