import { useState } from "react";

const DeviceControl = ({ deviceName }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="p-6 bg-[#5E503F] text-white rounded-lg shadow-md flex justify-between items-center">
      <h2 className="text-lg font-semibold">{deviceName}</h2>
      <button
        className={`px-4 py-2 rounded-md font-medium transition-all ${
          isOn ? "bg-green-500" : "bg-red-500"
        }`}
        onClick={() => setIsOn(!isOn)}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default DeviceControl;
