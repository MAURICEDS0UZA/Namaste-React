import { useEffect, useState } from "react";
import { Food_List } from "./constants";

const useRestaurantList = () => {
  const [res, setRes] = useState(null);
  useEffect(() => {
    // *Getting foodlists
    const fetchData = async () => {
      try {
        const data = await fetch(Food_List);
        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }
        const response = await data.json();
        console.log(response);
        setRes(response);
      } catch (error) {
        console.error("found error while fetching menu list :", error);
      }
    };
    fetchData();
  }, []);
  return res;
};

export default useRestaurantList;
