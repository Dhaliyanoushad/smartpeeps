import { useState } from "react";

const AlertPopup = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "warning"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div
      className={`fixed top-5 right-5 p-4 rounded-lg shadow-md text-white ${bgColor}`}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button
          onClick={() => {
            setIsVisible(false);
            if (onClose) onClose();
          }}
          className="ml-4 font-bold"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default AlertPopup;
