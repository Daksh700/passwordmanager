// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);

    const login = (token) => {
        setUserToken(token);
        localStorage.setItem('userToken', token); 
    };

    const logout = () => {
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