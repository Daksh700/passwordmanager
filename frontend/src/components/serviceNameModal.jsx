import React, { useState } from 'react';

const ServiceNameModal = ({ isOpen, onClose, onSave }) => {
  const [serviceName, setServiceName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (serviceName) {
      onSave(serviceName);
      onClose();
    } else {
      alert("Service name is required.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-medium mb-4">Enter Service Name</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
            placeholder="Service Name"
            required
          />
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceNameModal;