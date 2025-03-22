const API_BASE_URL = "https://your-api-url.com";

export const fetchAttendance = async () => {
  const response = await fetch(`${API_BASE_URL}/attendance`);
  return response.json();
};

export const fetchDevices = async () => {
  const response = await fetch(`${API_BASE_URL}/devices`);
  return response.json();
};

export const updateDeviceState = async (deviceId, state) => {
  const response = await fetch(`${API_BASE_URL}/devices/${deviceId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ state }),
  });
  return response.json();
};
