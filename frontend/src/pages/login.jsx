import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assests/images/login.png";
import '/Users/pradnyesh/Developer/passwordmanager/frontend/src/fonts.css'
import Footer from "../components/Footer";


const Login = () => {
  const navigate = useNavigate();

  const handleSuccess =async (credentialResponse) => {
    // console.log("Google Login Success:", credentialResponse);s
    const token  = credentialResponse.credential;
    const res = await fetch('http://localhost:5001/auth/google',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({token})
      
    })

    const data = await res.json()
    console.log("sent token");
    console.log(data)
    navigate("/");
  };

  const handleFailure = () => {
    console.log("Google Login Failed");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-blue-600 text-4xl font-bold font-micro5">
            PASSKEY
          </div>
          <div className="space-x-8">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15"
            >
              Home
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15"
            >
              About
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 text-3xl font-jersey15"
            >
              FAQs
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={loginImage}
                alt="Security Lock Illustration"
                className="w-96 h-auto"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-medium text-blue-600 mb-8 font-jersey10 tracking-wider">
                Your Vault, Just a Click Away
              </h1>
              <div className="flex justify-left">
                <GoogleLogin
                  onSuccess={handleSuccess}
                  onError={handleFailure}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    <Footer/>
    </div>
  );
};

export default Login;
