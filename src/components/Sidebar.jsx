import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaCog,
  FaBell,
  FaPlug,
  FaChartBar,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-[#22333B] h-screen p-5 flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-xl mb-6 focus:outline-none self-end"
      >
        {isOpen ? "<<" : ">>"}
      </button>

      {/* Menu Items */}
      <nav className="flex flex-col gap-6 text-white">
        <Link
          to="/"
          className="flex items-center gap-3 p-2 hover:bg-[#5E503F] rounded-md"
        >
          <FaHome /> {isOpen && "Home"}
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-2 hover:bg-[#5E503F] rounded-md"
        >
          <FaChartBar /> {isOpen && "Dashboard"}
        </Link>
        <Link
          to="/attendance"
          className="flex items-center gap-3 p-2 hover:bg-[#5E503F] rounded-md"
        >
          <FaClipboardList /> {isOpen && "Attendance"}
        </Link>
        <Link
          to="/devices"
          className="flex items-center gap-3 p-2 hover:bg-[#5E503F] rounded-md"
        >
          <FaPlug /> {isOpen && "Devices"}
        </Link>
        <Link
          to="/alerts"
          className="flex items-center gap-3 p-2 hover:bg-[#5E503F] rounded-md"
        >
          <FaBell /> {isOpen && "Alerts"}
        </Link>
        <Link
          to="/settings"
          className="flex items-center gap-3 p-2 hover:bg-[#5E503F] rounded-md"
        >
          <FaCog /> {isOpen && "Settings"}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
