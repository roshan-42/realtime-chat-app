import React from "react";

// This component is used to show received messages
const Received = ({ message }) => {
  return (
    <div className="flex items-start mb-4">
      <div className="ml-2 text-sm text-gray-600">Sender</div>

      <div className="bg-purple-800 text-white py-2 px-4 rounded-lg max-w-xs">
        {message}
      </div>
    </div>
  );
};

export default Received;
