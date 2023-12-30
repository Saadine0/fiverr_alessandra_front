// PopUp.js

import React from "react";
import { ImExit } from "react-icons/im";

const PopUp = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="relative z-50 bg-white p-6 rounded-md shadow-lg">
        <span
          className="absolute top-0 right-0 p-7 cursor-pointer"
          onClick={onClose}
        >
          <ImExit />
        </span>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
