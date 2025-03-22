import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex bg-[#0A0908] min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-3xl font-bold">Welcome to Smart IoT System</h1>
          <p className="mt-2 text-lg text-[#D2CCE7]">
            Manage attendance and energy consumption efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
