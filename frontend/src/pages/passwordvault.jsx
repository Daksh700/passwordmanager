import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, Lock, AlertCircle } from 'lucide-react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function PasswordVault() {
  const navigate = useNavigate();
  
  const handleAddPassword = () => {
    console.log("Add password clicked");
  };
  
  const handleCategoryClick = (category) => {
    console.log(`Category clicked: ${category}`);
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-medium text-blue-600 font-jersey10 tracking-wider">Personal</h1>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md flex items-center font-jersey15"
              onClick={handleAddPassword}
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              New
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center">
            <div className="flex justify-center mb-6">
              <Lock className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-3xl  text-blue-600  mb-4 font-jersey10">Your vault is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Add your first password to start building your secure vault. Your credentials will be encrypted and safely stored.
            </p>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center mx-auto font-jersey15"
              onClick={handleAddPassword}
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Add Password
            </button>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-medium mb-6 text-gray-800 font-jersey10">Add passwords by category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CategoryCard title="Banking" count="2" onClick={() => handleCategoryClick("Banking")} />
              <CategoryCard title="Email" count="1" onClick={() => handleCategoryClick("Email")} />
              <CategoryCard title="Shopping" count="2" onClick={() => handleCategoryClick("Shopping")} />
              <CategoryCard title="Social Media" count="2" onClick={() => handleCategoryClick("Social Media")} />
              <CategoryCard title="Work" count="2" onClick={() => handleCategoryClick("Work")} />
              <CategoryCard title="Utilities" count="2" onClick={() => handleCategoryClick("Utilities")} />
              <CategoryCard title="Travel" count="2" onClick={() => handleCategoryClick("Travel")} />
              <CategoryCard title="Entertainment" count="2" onClick={() => handleCategoryClick("Entertainment")} />
              <CategoryCard title="Health and Fitness" count="2" onClick={() => handleCategoryClick("Health and Fitness")} />
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2 font-jersey10">Security Tip</h3>
                <p className="text-gray-600">
                  For maximum security, use unique, complex passwords for each service. PASSKEY can generate strong passwords for you and securely store them all in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function CategoryCard({ title, count, onClick }) {
  return (
    <div 
      className="bg-white p-4 border border-gray-200 rounded-md hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-4">
          <Lock className="w-5 h-5 text-gray-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{count} items</p>
        </div>
      </div>
    </div>
  );
}

export default PasswordVault;