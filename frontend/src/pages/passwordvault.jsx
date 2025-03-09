import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, Lock, AlertCircle, Eye, EyeOff, Copy, Check } from 'lucide-react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import PasswordFormModal from "../pages/passwordFormModal";
import { useAuth } from "../context/AuthContext";

function PasswordVault() {
  const navigate = useNavigate();
  const { userToken } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordServices, setPasswordServices] = useState([]);
  const [passwordData, setPasswordData] = useState({});
  const [visiblePasswords, setVisiblePasswords] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // First fetch all password services
  useEffect(() => {
    if (userToken) {
      fetchPasswordList();
    } else {
      navigate('/login');
    }
  }, [userToken, navigate]);

  // Then fetch individual password details
  useEffect(() => {
    if (passwordServices.length > 0) {
      fetchPasswordDetails();
    }
  }, [passwordServices]);

  useEffect(() => {
    if (passwordServices.length > 0) {
      console.log("Fetching details for service IDs:", passwordServices.map(pwd => pwd._id));
      fetchPasswordDetails();
    }
  }, [passwordServices]);

  const fetchPasswordList = () => {
    setLoading(true);
    setError(null);
    
    fetch("http://localhost:5001/api/passwords", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch passwords: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Password list fetched:", data);
        setPasswordServices(data);
      })
      .catch((error) => {
        console.error("Error fetching password list:", error);
        setError(error.message);
        setLoading(false);
      });
  };

  const fetchPasswordDetails = async () => {
    const passwordDetailsMap = {};
    const fetchPromises = passwordServices.map(pwd => 
      fetch(`http://localhost:5001/api/passwords/${pwd._id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch password details: ${response.status}`);
        }
        return response.json();
      })
      .then(detailData => {
        passwordDetailsMap[pwd._id] = detailData;
        return detailData;
      })
      .catch(error => {
        console.error(`Error fetching details for ${pwd.serviceName}:`, error);
        return null;
      })
    );

    try {
      await Promise.all(fetchPromises);
      setPasswordData(passwordDetailsMap);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching password details:", error);
      setError("Failed to fetch complete password details");
      setLoading(false);
    }
  };
  
  const handleAddPassword = () => {
    setIsModalOpen(true);
  };
  
  const handleModalClose = (passwordAdded = false) => {
    setIsModalOpen(false);
    if (passwordAdded) {
      fetchPasswordList();
    }
  };

  const togglePasswordVisibility = (id) => {
    setVisiblePasswords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const copyPassword = (id, password) => {
    navigator.clipboard.writeText(password);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-medium text-blue-600 font-jersey10 tracking-wider">Personal</h1>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium flex items-center font-jersey15"
              onClick={handleAddPassword}
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Add Password
            </button>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <p>Loading your passwords...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
              <p>Error: {error}</p>
              <button 
                className="mt-2 text-blue-600 hover:underline"
                onClick={fetchPasswordList}
              >
                Try again
              </button>
            </div>
          ) : passwordServices.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center">
              <div className="flex justify-center mb-6">
                <Lock className="w-16 h-16 text-blue-600" />
              </div>
              <h2 className="text-3xl text-blue-600 mb-4 font-jersey10">Your vault is empty</h2>
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
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-medium text-blue-600 mb-4 font-jersey10">Your Passwords</h2>
              <div className="space-y-4">
                {passwordServices.map((pwd) => {
                  const details = passwordData[pwd._id] || {};
                  return (
                    <div key={pwd._id} className="border border-gray-200 rounded-md p-4 hover:border-blue-300 transition-all">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                            <Lock className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">{pwd.serviceName}</h3>
                            {details.username && <p className="text-sm text-gray-500">{details.username}</p>}
                            {details.email && <p className="text-sm text-gray-500">{details.email}</p>}
                            <div className="flex items-center mt-1">
                              <div className="bg-gray-100 px-3 py-1 rounded text-sm flex items-center min-w-40">
                                {visiblePasswords[pwd._id] ? (
                                  <span>{details.password || "••••••••••••"}</span>
                                ) : (
                                  <span>••••••••••••</span>
                                )}
                                <button 
                                  onClick={() => togglePasswordVisibility(pwd._id)} 
                                  className="ml-2 text-gray-500 hover:text-blue-600"
                                  title={visiblePasswords[pwd._id] ? "Hide password" : "Show password"}
                                >
                                  {visiblePasswords[pwd._id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                                <button 
                                  onClick={() => copyPassword(pwd._id, details.password || "")} 
                                  className="ml-1 text-gray-500 hover:text-blue-600"
                                  title="Copy password"
                                >
                                  {copiedId === pwd._id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(pwd.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

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

      {/* Password Form Modal */}
      <PasswordFormModal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
      />

      <Footer />
    </div>
  );
}

export default PasswordVault;