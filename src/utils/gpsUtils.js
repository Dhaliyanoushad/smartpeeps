export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => reject(error),
        { enableHighAccuracy: true }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};

export const isWithinGeofence = (userLocation, targetLocation, radius = 50) => {
  const distance = Math.sqrt(
    Math.pow(userLocation.latitude - targetLocation.latitude, 2) +
      Math.pow(userLocation.longitude - targetLocation.longitude, 2)
  );
  return distance <= radius;
};
