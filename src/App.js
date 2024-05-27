import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodContainer from "./components/FoodContainer";
import { resLists } from "./utils/constants";

const BodyContainer = () => {
  const [foodLists, setFoodLists] = useState(resLists);

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
          return <FoodContainer key={item.info.id} resLists={item} />;
        })}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <BodyContainer />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
