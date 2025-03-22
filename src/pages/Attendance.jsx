import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AttendanceList from "../components/AttendanceList";

const studentsData = [
  { name: "John Doe", present: true },
  { name: "Jane Smith", present: false },
  { name: "Alice Johnson", present: true },
  { name: "Bob Brown", present: false },
  { name: "Charlie White", present: true },
];

const Attendance = () => {
  return (
    <div className="flex bg-[#0A0908] min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-3xl font-bold">Attendance</h1>
          <p className="mt-2 text-lg text-[#D2CCE7]">
            Track student attendance in real-time.
          </p>

          {/* Attendance List */}
          <div className="mt-6">
            <AttendanceList students={studentsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
