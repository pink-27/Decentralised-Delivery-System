import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-2 transform transition-transform hover:scale-105">
      <div className="h-32 bg-gray-300 rounded-lg mb-4"></div>
      <h3 className="text-xl font-bold mb-2">Card Title</h3>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        aliquam purus, et accumsan metus vestibulum eu. Proin dapibus dolor ut
        mi tempor varius.
      </p>
      <div className="flex justify-end mt-4">
        <Link className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" to="/ship" >
          Try This!
        </Link>
      </div>
    </div>
  );
};

export default Card;
