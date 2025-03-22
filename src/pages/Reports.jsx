import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AnalyticsChart from "../components/AnalyticsChart";

const Reports = () => {
  return (
    <div className="flex bg-[#0A0908] min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="mt-2 text-lg text-[#D2CCE7]">
            View detailed reports on attendance and energy usage.
          </p>

          {/* Attendance Report */}
          <div className="mt-6 p-6 bg-[#23333B] rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Attendance Report</h2>
            <AnalyticsChart
              label="Monthly Attendance"
              dataPoints={[90, 85, 80, 88, 92, 95, 97]}
            />
          </div>

          {/* Energy Consumption Report */}
          <div className="mt-6 p-6 bg-[#23333B] rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Energy Consumption</h2>
            <AnalyticsChart
              label="Energy Usage (kWh)"
              dataPoints={[50, 55, 60, 58, 65, 70, 75]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
