import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DeviceControl from "../components/DeviceControl";

const devices = [
  { name: "Classroom Lights" },
  { name: "Projector" },
  { name: "Air Conditioner" },
  { name: "Smart Fan" },
  { name: "Security Camera" },
];

const Devices = () => {
  return (
    <div className="flex bg-[#0A0908] min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-3xl font-bold">Devices</h1>
          <p className="mt-2 text-lg text-[#D2CCE7]">
            Manage and control IoT-enabled devices.
          </p>

          {/* Device Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {devices.map((device, index) => (
              <DeviceControl key={index} deviceName={device.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
