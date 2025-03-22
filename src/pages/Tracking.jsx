import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Tracking = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });

  const handleTrackLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported.");
    }
  };

  return (
    <div className="flex bg-[#0A0908] min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-3xl font-bold">Location Tracking</h1>
          <p className="mt-2 text-lg text-[#D2CCE7]">
            Track the real-time location of students and staff.
          </p>

          <div className="mt-6 p-6 bg-[#23333B] rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Current Location</h2>
            <p>Latitude: {location.lat ?? "Not Available"}</p>
            <p>Longitude: {location.lon ?? "Not Available"}</p>
            <button
              onClick={handleTrackLocation}
              className="mt-4 bg-[#7A3B69] px-4 py-2 rounded-md font-medium hover:bg-[#563440] transition-all"
            >
              Get Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
