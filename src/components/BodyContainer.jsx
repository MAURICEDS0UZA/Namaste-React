import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Food_List, resLists } from "../utils/constants";
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
    const data = await fetch(Food_List);
    const res = await data.json();

    setfilterFood(
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFoodLists(
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
              className="bg-orange-200 px-4 py-1 rounded-md m-4  hover:bg-orange-300  "
              onClick={() => {
                const restaurantsMost = foodLists.filter(
                  (res) => res.info.avgRating > 4.1
                );
                setfilterFood(restaurantsMost);
              }}
            >
              Top Rated
            </button>
          </div>
          <div className="mx-4 flex gap-4 flex-wrap  m-4 lg:p-4 bg-gray-100 shadow-slate-400 shadow-lg rounded-lg">
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
