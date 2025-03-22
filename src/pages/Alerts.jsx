import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AlertPopup from "../components/AlertPopup";
import { useState } from "react";

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, message: "Unauthorized entry detected!", type: "warning" },
    { id: 2, message: "Energy consumption is high!", type: "error" },
  ]);

  const handleCloseAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <div className="flex bg-[#0A0908] min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-3xl font-bold">Alerts</h1>
          <p className="mt-2 text-lg text-[#D2CCE7]">
            Monitor system warnings and security alerts.
          </p>

          <div className="mt-6 space-y-4">
            {alerts.length > 0 ? (
              alerts.map((alert) => (
                <AlertPopup
                  key={alert.id}
                  message={alert.message}
                  type={alert.type}
                  onClose={() => handleCloseAlert(alert.id)}
                />
              ))
            ) : (
              <p className="text-[#D2CCE7]">No active alerts.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
