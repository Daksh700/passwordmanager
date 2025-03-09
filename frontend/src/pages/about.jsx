import React from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import { Shield, Lock, Database } from 'lucide-react';

export default function AboutPage() {
  const navigate = useNavigate();
  const handleNavigateVault = () => {
    navigate('/passwordvault')
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Import Navbar component */}
      <Navbar />
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          About PASSKEY
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          A robust and secure password management solution developed as a college project to help users safeguard their digital identity.
        </p>
        
        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-600">
            At PASSKEY, we believe in making cybersecurity accessible to everyone. Our mission is to provide a user-friendly yet highly secure platform for managing passwords and sensitive information. In an era where digital security breaches are increasingly common, we aim to empower users with tools that protect their online presence without compromising convenience.
          </p>
        </div>
        
        {/* Security Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Security Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border">
              <Lock className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">AES Encryption</h3>
              <p className="text-gray-600">
                We implement Advanced Encryption Standard (AES) to encrypt all your sensitive data, ensuring that your passwords remain secure and protected from unauthorized access.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border">
              <Database className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Secure Storage</h3>
              <p className="text-gray-600">
                All secret keys for AES encryption are stored in a hashed format in our database, adding an additional layer of security to prevent potential data breaches.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Zero-Knowledge Design</h3>
              <p className="text-gray-600">
                We employ a zero-knowledge architecture, meaning we cannot access your passwords. Your encryption keys are generated and stored locally on your device.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Project Team</h2>
          <p className="text-gray-600 mb-6">
            PASSKEY was developed as a college project by a dedicated team of cybersecurity enthusiasts. Our team combined their expertise in encryption, web development, and user experience design to create a comprehensive password management solution.
          </p>
          {/* Note: You can add team member cards here if desired */}
        </div>
        
        {/* Call to Action */}
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to secure your digital identity?</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Join thousands of users who trust PASSKEY to protect their passwords and sensitive information. Get started today and take control of your online security.
          </p>
          <button onClick={handleNavigateVault} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Create Your Vault
          </button>
        </div>
      </div>
      
      {/* Import Footer component */}
      <Footer />
    </div>
  );
}