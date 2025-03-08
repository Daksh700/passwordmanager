import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQsPage() {
  // State to track which FAQ is expanded
  const [expandedFaq, setExpandedFaq] = React.useState(0);
  
  // FAQ data
  const faqs = [
    {
      question: "How does PASSKEY keep my passwords secure?",
      answer: "PASSKEY uses AES (Advanced Encryption Standard) to encrypt all your stored passwords. AES is a widely trusted encryption method used by governments and security professionals worldwide. Additionally, the secret keys for AES encryption are stored in a hashed format in our database, making it extremely difficult for anyone to access your actual passwords, even in the unlikely event of a data breach."
    },
    {
      question: "Can PASSKEY access my passwords?",
      answer: "No. PASSKEY operates on a zero-knowledge architecture, which means we cannot access your passwords or other sensitive information. Your master password, which is used to encrypt and decrypt your data, is never stored on our servers. The encryption and decryption processes happen locally on your device."
    },
    {
      question: "What happens if I forget my master password?",
      answer: "Since PASSKEY employs a zero-knowledge security model, we cannot recover or reset your master password if you forget it. This is a security feature to ensure no one can bypass the encryption. We strongly recommend storing your master password in a secure location or using a password hint that only you would understand."
    },
    {
      question: "Is PASSKEY open source?",
      answer: "As a college project, we're currently evaluating our open source strategy. We believe in transparency and may make portions of our codebase available for review by security experts in the future. However, certain proprietary security implementations remain closed to maintain the highest level of protection."
    },
    {
      question: "How is the Password Generator feature secure?",
      answer: "Our Password Generator creates strong, random passwords using cryptographically secure random number generators. You can customize the password length, character types (uppercase, lowercase, numbers, symbols), and other parameters to meet the specific requirements of different websites and services."
    },
    {
      question: "Can I use PASSKEY on multiple devices?",
      answer: "Yes, PASSKEY is designed to work across multiple devices. After signing in with your Google account, your encrypted password vault can be securely synchronized across all your devices, allowing you to access your passwords wherever you need them."
    },
    {
      question: "How does PASSKEY compare to commercial password managers?",
      answer: "While PASSKEY was developed as a college project, we've implemented industry-standard security practices like AES encryption and secure key storage. Our focus has been on creating a straightforward, secure solution without unnecessary features that might complicate the user experience or introduce vulnerabilities."
    }
  ];
  
  // Toggle FAQ expansion
  const toggleFaq = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Import Navbar component */}
      <Navbar />
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Find answers to common questions about PASSKEY's features, security, and functionality.
        </p>
        
        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 py-5"
            >
              <button 
                className="flex justify-between items-center w-full text-left font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg">{faq.question}</span>
                {expandedFaq === index ? 
                  <ChevronUp className="w-5 h-5 text-blue-600" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                }
              </button>
              
              {expandedFaq === index && (
                <div className="mt-3 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            If you couldn't find the answer you were looking for, please contact our team.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
      
      {/* Import Footer component */}
      <Footer />
    </div>
  );
}