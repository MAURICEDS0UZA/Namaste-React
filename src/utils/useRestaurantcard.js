import { useEffect, useState } from "react";
import { Restaurant_Api } from "./constants";

const useRestaurantCard = (resId) => {
  const [resCard, setResCard] = useState([]);

  useEffect(() => {
    fetchRes(resId);
  }, [resId]);

  const fetchRes = async (resId) => {
    try {
      const data = await fetch(Restaurant_Api + resId);

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const response = await data.json();
      setResCard(response?.data);
    } catch (error) {
      console.error(
        "Found error while fetching restaurant card detail:",
        error
      );
    }
  };

  return resCard;
};

export default useRestaurantCard;
