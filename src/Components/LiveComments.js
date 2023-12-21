import React from "react";

const LiveComments = ({ name, commentText }) => {
  return (
    <div className="flex bg-white py-2 px-3 rounded-lg mt-2">
      <p className="font-bold text-gray-600">{name}:</p>
      <p className="font-bold ml-3">{commentText}</p>
    </div>
  );
};

export default LiveComments;
