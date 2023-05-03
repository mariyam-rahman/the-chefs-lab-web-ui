// AuthContext.js

import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUserData] = useState(null);

  const [authToken, setAuthToken] = useState(null);

  const login = (token, user) => {
    setIsLoggedIn(true);
    setUserData(user);
    setAuthToken(token);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

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
