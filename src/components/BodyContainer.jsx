import { useEffect, useState } from "react";
import { resLists } from "../utils/constants";
import FoodContainer from "./FoodContainer";

const BodyContainer = () => {
  const [foodLists, setFoodLists] = useState(resLists);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();

    // setFoodLists(res.data.cards[0].card.card.imageGridCards.info);
  }

  return (
    <div className="bodyContainer">
      <div className="search">
        <input type="text"></input>
        <button>Search</button>
        <button
          onClick={() =>
            setFoodLists(
              foodLists.filter((item) => item.info.avgRating === 4.4)
            )
          }
        >
          Top Rated
        </button>
      </div>
      <div className="food-list">
        {foodLists.map((item) => {
          return <FoodContainer key={item?.info?.id} resLists={item} />;
        })}
      </div>
    </div>
  );
};

export default BodyContainer;
