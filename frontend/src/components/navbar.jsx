import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Navbar = () => {
    const [userInfo,setUserInfo] = useState(null);
    const navigate = useNavigate();

    

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return(
        <nav className="py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-blue-600 text-4xl font-bold font-micro5">
            PASSKEY
          </div>
          <div className="space-x-8">
            <a href="#" className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15">
              Home
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15">
              About
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15">
              FAQs
            </a>
            <a onClick={handleLogout} className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15">
              Logout
            </a>


          </div>
        </div>
      </nav>
    )
}

export default Navbar