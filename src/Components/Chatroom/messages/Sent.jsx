import React from "react";

//This component is used to show sent message

const Sent = ({ message }) => {
  return (
    <div className="flex items-start justify-end mb-4">
      <div className="bg-green-500 text-white py-2 px-4 rounded-lg max-w-xs">
        {message}
      </div>
      <div className="mr-2 text-sm text-gray-600">You</div>
    </div>
  );
};

export default Sent;
