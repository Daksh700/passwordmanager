// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
      const storedToken = localStorage.getItem('userToken');
      if (storedToken) {
          console.log("Restoring token from localStorage:", storedToken);
          setUserToken(storedToken);
      }
  }, []);

  const login = (token) => {
      console.log("Setting Token:", token);
      setUserToken(token);
      localStorage.setItem('userToken', token);
  };

  const logout = () => {
      console.log("Logging out, clearing token");
      setUserToken(null);
      localStorage.removeItem('userToken');
  };

  return (
      <AuthContext.Provider value={{ userToken, setUserToken, login, logout }}>
          {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext);
};