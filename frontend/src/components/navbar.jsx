import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

const Navbar = () => {
    const [userInfo,setUserInfo] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return(
        <nav className="py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15">
          <div className="text-blue-600 text-4xl font-bold font-micro5">
            PASSKEY
          </div>
          </a>
          <div className="space-x-8">
            <a href="/" className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15">
              Home
            </a>
            <a href="/about" className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15">
              About
            </a>
            <a href="/faqs" className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15">
              FAQs
            </a>
            {location.pathname !== '/login' && (
                <a onClick={handleLogout} className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15 hover:cursor-pointer">
                    Logout
                </a>
            )}
          </div>
        </div>
      </nav>
    )
}

export default Navbar