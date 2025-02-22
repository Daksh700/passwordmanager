import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Lock, Key, ChevronRight } from 'lucide-react';
import SocialIcons from "./SocialIcons";

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
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
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <h1 className="text-5xl font-medium text-blue-600 mb-12 font-jersey10 tracking-wider text-center">
            Choose Your Security Tool
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Password Vault Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-blue-100">
              <div className="flex items-center justify-center mb-6">
                <Lock className="w-16 h-16 text-blue-600" />
              </div>
              <h2 className="text-3xl font-jersey10 text-blue-600 mb-4 text-center">
                Password Vault
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Securely store and manage all your passwords in one place. Organize them by categories and access them anywhere.
              </p>
              <div className="flex justify-center">
                <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-jersey15 tracking-wider">
                  Open Vault
                  <ChevronRight className="ml-2" />
                </button>
              </div>
            </div>

            {/* Password Generator Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-blue-100">
              <div className="flex items-center justify-center mb-6">
                <Key className="w-16 h-16 text-blue-600" />
              </div>
              <h2 className="text-3xl font-jersey10 text-blue-600 mb-4 text-center">
                Password Generator
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Create strong, unique passwords instantly. Customize length and complexity to meet your security needs.
              </p>
              <div className="flex justify-center">
                <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-jersey15 tracking-wider">
                  Generate Password
                  <ChevronRight className="ml-2" />
                </button>
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
}

export default Home;