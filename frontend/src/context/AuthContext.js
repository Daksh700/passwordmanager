import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const updateUserToken = (token) => {
    console.log("Setting user token:", token); 
    setUserToken(token);
  };

  return (
    <AuthContext.Provider value={{ userToken, setUserToken: updateUserToken }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};