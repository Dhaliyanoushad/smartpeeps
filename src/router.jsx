import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Devices from "./pages/Devices";
import Tracking from "./pages/Tracking";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default RouterConfig;
