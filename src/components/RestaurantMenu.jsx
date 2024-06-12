import { Non_Veg_Logo, Veg_Logo, Food_Image_Menu } from "../utils/constants";
import { Fragment } from "react";

const RestaurantMenu = ({ resMenuDetails }) => {
  return (
    <>
      <section className=" p-4 border-t-2 bg-gray-100  rounded-lg w-9/12 grid m-auto">
        <h2 className="font-bold text-lg">Recommened</h2>
        {resMenuDetails.map((item) => {
          const {
            id,
            name,
            defaultPrice,
            price,
            ratings,
            isVeg,
            imageId,
            description,
          } = item?.card?.info;

          return (
            <Fragment key={id}>
              <div className="flex justify-around ">
                <div className="flex flex-col  border-white border-t-2 py-4">
                  <div className="flex items-center pl-4 py-1">
                    <div>{isVeg ? Veg_Logo : Non_Veg_Logo}</div>
                    <div className="font-semibold">{name}</div>
                  </div>
                  <div className="pl-4 py-1">
                    Rs.{defaultPrice / 100 || price / 100}
                  </div>
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
                  <div className="pl-4 py-1">{description}</div>
                </div>
                <div>
                  <div className="m-4 object-fill">
                    <img
                      className="rounded-md "
                      src={Food_Image_Menu + imageId}
                      alt="Food image"
                    ></img>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </section>
    </>
  );
};
export default RestaurantMenu;
