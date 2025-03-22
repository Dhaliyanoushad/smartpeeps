import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#A9927D] text-[#0A0908] flex justify-between items-center p-4 shadow-md">
      {/* Title */}
      <h1 className="text-2xl font-bold">Smart IoT System</h1>

      {/* User Profile */}
      <div className="flex items-center gap-3">
        <FaUserCircle size={28} />
        <span className="font-medium">Admin</span>
      </div>
    </div>
  );
};

export default Navbar;
