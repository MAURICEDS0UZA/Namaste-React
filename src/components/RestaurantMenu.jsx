import { Non_Veg_Logo, Veg_Logo, Food_Image_Menu } from "../utils/constants";
import { Fragment, useState } from "react";
const RestaurantMenu = ({ restMenu }) => {
  const [showFoodList, setshowFoodList] = useState(null);

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
                {showFoodList == index &&
                  foodCard?.card?.card?.itemCards.map((foodCard) => {
                    const {
                      id,
                      name,
                      defaultPrice,
                      price,
                      ratings,
                      isVeg,
                      imageId,
                      description,
                    } = foodCard?.card?.info;

                    return (
                      <Fragment key={id}>
                        <div className="flex justify-around ">
                          <div className="flex flex-col w-9/12 border-white border-t-2 py-4">
                            <div className="flex items-center pl-4 py-1">
                              <div>{isVeg ? Veg_Logo : Non_Veg_Logo}</div>
                              <div className="font-semibold">{name}</div>
                            </div>
                            <div className="pl-4 py-1">
                              ₹ {defaultPrice / 100 || price / 100} /-
                            </div>
                            {ratings?.aggregatedRating?.rating && (
                              <div className=" flex items-center  py-1">
                                <svg
                                  width="40"
                                  height="10"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <polygon
                                    fill="green"
                                    points="12,2 15,9 22,9 17,14 18.5,21 12,17 5.5,21 7,14 2,9 9,9"
                                  />
                                </svg>
                                <span>
                                  {" "}
                                  {ratings?.aggregatedRating?.rating}
                                </span>
                              </div>
                            )}
                            <div className="pl-4 py-1">{description}</div>
                          </div>
                          <div>
                            <div className="m-20 relative">
                              <img
                                className="rounded-md "
                                src={Food_Image_Menu + imageId}
                                alt="Food image"
                              ></img>
                              <button className="cursor-pointer bg-black rounded-lg text-white p-1 right-[35%] top-1  absolute ">
                                Add +
                              </button>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
              </>
            </Fragment>
          );
        })}
    </>
  );
};
export default RestaurantMenu;
