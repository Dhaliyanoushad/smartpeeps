import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import AnalyticsChart from "../components/AnalyticsChart";
import { FaUsers, FaPlug, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex bg-[#0A0908] min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <DashboardCard
              title="Total Students"
              value="120"
              icon={FaUsers}
              bgColor="bg-[#563440]"
            />
            <DashboardCard
              title="Active Devices"
              value="15"
              icon={FaPlug}
              bgColor="bg-[#7A3B69]"
            />
            <DashboardCard
              title="Energy Usage"
              value="85 kWh"
              icon={FaChartLine}
              bgColor="bg-[#866A9A]"
            />
          </div>

          {/* Analytics Chart */}
          <div className="mt-6">
            <AnalyticsChart
              label="Energy Usage Over Time"
              dataPoints={[50, 60, 70, 65, 80, 85, 90]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
