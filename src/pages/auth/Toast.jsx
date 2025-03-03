import React from 'react'

const Toast = ({ message, type, onClose }) => {
    return (
      <div
        className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-md text-white ${
          type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        <div className="flex items-center">
          <span>{message}</span>
          <button
            onClick={onClose}
            className="ml-4 text-white bg-transparent hover:text-gray-200"
          >
            ✖
          </button>
        </div>
      </div>
    );
  };
  

export default Toast