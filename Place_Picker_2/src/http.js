export const fetchAvailablePlaces = async () => {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    const error = new Error("Failed to fetch places.");
    throw error;
  }

  return resData.places;
};

export const updateUserPlaces = async (places) => {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    const error = new Error("Failed to update user data.");
    throw error;
  }

  return resData.message;
};

export const fetchUserPlaces = async () => {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    const error = new Error("Failed to fetch user places.");
    throw error;
  }

  return resData.places;
};
