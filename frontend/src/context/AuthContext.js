// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(() => {
        // Retrieve token from localStorage on initial load
        return localStorage.getItem('userToken') || null;
    });

    const login = (token) => {
        setUserToken(token);
        localStorage.setItem('userToken', token); // Store token in local storage
    };

    const logout = () => {
        setUserToken(null);
        localStorage.removeItem('userToken'); // Remove token from local storage
    };

    return (
        <AuthContext.Provider value={{ userToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};