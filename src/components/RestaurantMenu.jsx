import { Non_Veg_Logo, Veg_Logo, Food_Image_Menu } from "../utils/constants";
import { Fragment } from "react";

const RestaurantMenu = ({ resMenuDetails }) => {
  return (
    <>
      <section className="restaurant-menu">
        <h2>Recommened</h2>
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
          console.log(id);
          return (
            <Fragment key={id}>
              <div key={id}>
                <div>
                  <div>{isVeg ? Veg_Logo : Non_Veg_Logo}</div>
                  <div>{name}</div>
                  <div>Rs.{defaultPrice / 100 || price / 100}</div>
                  <div>
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        fill="green"
                        points="12,2 15,9 22,9 17,14 18.5,21 12,17 5.5,21 7,14 2,9 9,9"
                      />
                    </svg>
                    {ratings?.aggregatedRating?.rating}
                  </div>
                  <div>{description}</div>
                </div>
                <div>
                  <div>
                    <img src={Food_Image_Menu + imageId} alt="Food image"></img>
                  </div>
                </div>
                <hr />
              </div>
            </Fragment>
          );
        })}
      </section>
    </>
  );
};
export default RestaurantMenu;
