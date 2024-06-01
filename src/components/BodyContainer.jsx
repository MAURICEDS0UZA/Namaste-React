import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { resLists } from "../utils/constants";
import FoodContainer from "./FoodContainer";
import Shimmer from "./Shimmer";

const BodyContainer = () => {
  const [foodLists, setFoodLists] = useState([]);
  const [filterFood, setfilterFood] = useState([]);
  const [searchVal, setsearchVal] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // *Getting foodlists
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();

    setfilterFood(
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFoodLists(
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="bodyContainer">
      {foodLists.length === 0 ? (
        <>
          {console.log("true")}
          <Shimmer />
        </>
      ) : (
        <>
          <div className="search">
            <input
              type="text"
              onChange={(e) => {
                setsearchVal(e.target.value);
              }}
              value={searchVal}
            ></input>
            <button
              onClick={() => {
                setfilterFood(
                  foodLists.filter((item) =>
                    item.info.name
                      .toLocaleLowerCase()
                      .includes(searchVal.toLocaleLowerCase())
                  )
                );
              }}
            >
              Search
            </button>
            <button
              onClick={() => {
                const restaurantsMost = foodLists.filter(
                  (res) => res.info.avgRating > 4.1
                );
                console.log("most rated");
                setfilterFood(restaurantsMost);
              }}
            >
              Top Rated
            </button>
          </div>
          <div className="food-list">
            {filterFood.map((item) => {
              return (
                <Link key={item?.info?.id} to={"/restaurant/" + item?.info?.id}>
                  <FoodContainer resLists={item} />
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default BodyContainer;
