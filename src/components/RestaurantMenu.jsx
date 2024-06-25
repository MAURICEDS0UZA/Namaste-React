import { useDispatch } from "react-redux";
import { Fragment, useState } from "react";
import Items from "./Items";

const RestaurantMenu = ({ restMenu }) => {
  const [showFoodList, setshowFoodList] = useState(null);
  // const dispatch = useDispatch();
  return (
    <>
      {restMenu &&
        restMenu.map((foodCard, index) => {
          return (
            <Fragment key={index}>
              <>
                {/* Menu card header */}
                <div
                  className="flex justify-between p-4 border-t-2"
                  onDoubleClick={() => setshowFoodList(null)}
                  onClick={() => {
                    setshowFoodList(index);
                  }}
                >
                  <h2 className="font-bold text-lg">
                    {foodCard?.card?.card?.title}
                  </h2>
                  <span>🔽</span>
                </div>
                {/* Menu card List details */}
                {showFoodList === index &&
                  foodCard?.card?.card?.itemCards.map((foodCard, index) => {
                    return <Items foodCard={foodCard} key={index} />;
                  })}
              </>
            </Fragment>
          );
        })}
    </>
  );
};
export default RestaurantMenu;
