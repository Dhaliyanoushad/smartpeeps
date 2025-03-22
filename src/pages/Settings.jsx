import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div
      className={`flex min-h-screen ${
        darkMode ? "bg-[#0A0908] text-white" : "bg-white text-black"
      }`}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="mt-2 text-lg text-[#D2CCE7]">
            Manage system preferences and account settings.
          </p>

          {/* Preferences */}
          <div
            className={`mt-6 p-6 rounded-lg shadow-md ${
              darkMode ? "bg-[#23333B]" : "bg-gray-200 text-black"
            }`}
          >
            <h2 className="text-lg font-semibold mb-4">Preferences</h2>

            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between mb-4">
              <span>Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-6 flex items-center rounded-full transition-all ${
                  darkMode ? "bg-[#7A3B69]" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
                    darkMode ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Notifications Toggle */}
            <div className="flex items-center justify-between">
              <span>Enable Notifications</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 flex items-center rounded-full transition-all ${
                  notifications ? "bg-[#7A3B69]" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
                    notifications ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
