import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assests/images/login.png";
import "/Users/dakshgoel/passwordmanager/frontend/src/fonts.css";
import SocialIcons from "./SocialIcons";

const Login = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
    // Here, you can send credentialResponse.tokenId to your backend
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

      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <div className="text-blue-600 text-4xl font-bold mb-2 font-micro5">
                PASSKEY
              </div>
              <p className="text-sm text-gray-600">
                © 2025{" "}
                <span className="text-2xl text-blue-600 font-bold font-micro5">
                  PASSKEY.
                </span>{" "}
                All rights reserved.
              </p>
            </div>

            <div className="md:col-span-6 grid grid-cols-3 gap-8">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Terms & Condition
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Security
              </a>
            </div>

            <div className="md:col-span-3">
              <p className="font-medium mb-2">Need Help?</p>
              <p className="text-gray-600">Contact us:</p>
              <p className="text-gray-600">support@passkey.com</p>

              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <SocialIcons.Twitter />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <SocialIcons.Instagram />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <SocialIcons.YouTube />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <SocialIcons.Threads />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
