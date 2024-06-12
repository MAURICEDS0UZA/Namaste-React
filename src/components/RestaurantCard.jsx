import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";
import { Restaurant_Api } from "../utils/constants";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantCard = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [restMenu, setrestMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchRes();
  }, []);

  //  * fetch Restaurant details
  const fetchRes = async () => {
    const data = await fetch(Restaurant_Api + resId);
    const res = await data.json();
    setRestaurant(res?.data?.cards[2]?.card?.card?.info);
    setrestMenu(
      res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  return (
    <>
      <RestaurantDetails resListDetail={restaurant} />
      <RestaurantMenu resMenuDetails={restMenu} />
    </>
  );
};

export default RestaurantCard;
