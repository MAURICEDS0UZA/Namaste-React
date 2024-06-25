import React, { Fragment } from "react";
import { Food_Image_Menu, Non_Veg_Logo, Veg_Logo } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import appStore from "../utils/appStore";

function Items({ foodCard }) {
  const dispatch = useDispatch();

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
    <>
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
                <span> {ratings?.aggregatedRating?.rating}</span>
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
              <button
                className="cursor-pointer bg-black rounded-lg text-white p-1 right-[35%] top-1  absolute "
                onClick={() => {
                  dispatch(addItem(foodCard));
                }}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
}
//

//
export default Items;
