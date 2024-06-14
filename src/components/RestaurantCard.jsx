import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";
import useRestaurantCard from "../utils/useRestaurantcard";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantCard = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [restMenu, setrestMenu] = useState([]);
  const { resId } = useParams();

  const res = useRestaurantCard(resId);

  useEffect(() => {
    if (res.cards) {
      setRestaurant(res?.cards[2]?.card?.card?.info);
      const restFetchMenu =
        res?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (resCard) =>
            resCard?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setrestMenu(restFetchMenu);
    }
  }, [res]);

  return (
    <>
      <RestaurantDetails resListDetail={restaurant} />
      <RestaurantMenu resMenuDetails={restMenu} />
    </>
  );
};

export default RestaurantCard;
