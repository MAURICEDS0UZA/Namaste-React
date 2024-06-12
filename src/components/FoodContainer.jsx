import { Food_Log } from "../utils/constants";

const FoodContainer = ({ resLists }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resLists?.info;

  return (
    <>
      <div className="flex flex-wrap w-48 p-4 m-4  rounded-lg h-96  hover:bg-white bg-gray-300">
        <img className="rounded-lg" src={Food_Log + cloudinaryImageId}></img>
        <div className="flex flex-col">
          <p>
            <b>{name}</b>
          </p>
          {cuisines.length > 3 ? (
            <p>{cuisines.slice(0, 2).join(", ")}....</p>
          ) : (
            <p>{cuisines.join(", ")}</p>
          )}
          <p>{avgRating} Stars</p>
          <p>{costForTwo} </p>
          <p>{sla?.deliveryTime} minutes</p>
        </div>
      </div>
    </>
  );
};

export default FoodContainer;
