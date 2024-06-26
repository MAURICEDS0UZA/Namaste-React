import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodContainer, { withOpenRestaurantCard } from "./FoodContainer";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";

const BodyContainer = () => {
  const [foodLists, setFoodLists] = useState([]);
  const [filterFood, setFilterFood] = useState([]);
  const [searchVal, setsearchVal] = useState("");

  // ***Hook to fetch menu list
  const res = useRestaurantList();

  useEffect(() => {
    {
      const restaurants =
        res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants) {
        setFilterFood(restaurants);
        setFoodLists(restaurants);
      }
    }
  }, [res]);

  // **HOC enchance promoted card
  const RestaurantPromoted = withOpenRestaurantCard(FoodContainer);

  return (
    <div>
      {foodLists.length === 0 ? (
        <>
          <Shimmer />
        </>
      ) : (
        <>
          <div className="flex justify-center shadow-md  shadow-gray-400 ">
            <input
              className="border-2 px-4 m-4 "
              type="text"
              onChange={(e) => {
                setsearchVal(e.target.value);
              }}
              value={searchVal}
            ></input>
            <button
              className="bg-orange-200 px-4 py-1 rounded-md m-4 hover:bg-orange-300  "
              onClick={() => {
                setFilterFood(
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
              className="bg-orange-200 px-4 py-1 rounded-md m-4  hover:bg-orange-300  "
              onClick={() => {
                const restaurantsMost = foodLists.filter(
                  (res) => res.info.avgRating > 4.1
                );
                setFilterFood(restaurantsMost);
              }}
            >
              Top Rated
            </button>
          </div>
          <div className="mx-4 flex gap-4 flex-wrap  m-4 lg:p-4 bg-gray-100 shadow-slate-400 shadow-lg rounded-lg justify-center">
            {console.log(filterFood.length)}
            {filterFood.length === 0 ? (
              <div className="flex   ">
                <div className="p-8 my-4 font-semibold text-2xl ">
                  Not found !<span className="animate-pulse">🙈</span>
                </div>
              </div>
            ) : (
              filterFood.map((item) => {
                return (
                  <Link
                    key={item?.info?.id}
                    to={"/restaurant/" + item?.info?.id}
                  >
                    {item?.info?.veg ? (
                      <RestaurantPromoted resLists={item} />
                    ) : (
                      <FoodContainer resLists={item} />
                    )}
                  </Link>
                );
              })
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BodyContainer;
