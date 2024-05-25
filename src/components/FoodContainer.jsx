import { Food_Log } from "../utils/constants";

const FoodContainer = ({ resLists }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, id } =
    resLists?.info;

  return (
    <>
      <div className="food-container">
        <img src={Food_Log + cloudinaryImageId}></img>
        <div>
          <p>
            <b>{name}</b>
          </p>
          <p>{cuisines.join(" ,")}</p>
          <p>{avgRating} Stars</p>
          <p>{sla.deliveryTime} minutes</p>
        </div>
      </div>
    </>
  );
};

export default FoodContainer;
