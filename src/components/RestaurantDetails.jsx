import { star } from "../utils/constants";

const RestaurantDetails = ({ resListDetail }) => {
  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    sla,
    areaName,
    totalRatingsString,
  } = resListDetail;

  return (
    <>
      <section className="restaurant-detail">
        <h1 className="restaurant-name">{name}</h1>
        <div className="restaurant-detail_list">
          <div className="restaurant-detail_rating">
            {star}
            <div>
              {avgRating} {totalRatingsString}
              <span>.</span>
            </div>
            <div>{costForTwoMessage}</div>
          </div>
          <div>{cuisines?.join(" ,  ")}</div>
          <div>{areaName}</div>
          <hr />
          <div className="restaurant-detail-delivery">
            <div>{sla?.lastMileTravelString} |</div>
            <div>{sla?.slaString}</div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RestaurantDetails;
