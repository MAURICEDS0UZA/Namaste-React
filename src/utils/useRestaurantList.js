import { useEffect, useState } from "react";
import { Food_List } from "./constants";

const useRestaurantList = () => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // *Getting foodlists
  const fetchData = async () => {
    try {
      const data = await fetch(Food_List);
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const response = await data.json();
      setRes(response);
    } catch (error) {
      console.error("found error while fetching menu list :", error);
    }
  };

  return res;
};

export default useRestaurantList;
