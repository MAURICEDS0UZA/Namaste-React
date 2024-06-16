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

      const groupCardObject = res?.cards.find((item) =>
        item.hasOwnProperty("groupedCard")
      );

      if (groupCardObject) {
        const restFetchMenu =
          res?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (resCard) =>
              resCard?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        setrestMenu(restFetchMenu);
      }
    }
  }, [res]);

  return (
    <>
      <RestaurantDetails resListDetail={restaurant} />
      <section className=" p-4  bg-gray-100  rounded-lg w-9/12 grid m-auto">
        <RestaurantMenu restMenu={restMenu} />
      </section>
    </>
  );
};

export default RestaurantCard;
