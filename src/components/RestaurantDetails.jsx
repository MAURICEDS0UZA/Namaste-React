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
      <section className="p-4 w-9/12 m-auto my-4  bg-gray-100 flex flex-col rounded-xl">
        <h1 className="font-bold text-2xl py-4">{name}</h1>
        <div className="flex flex-col bg-slate-50  border-2 border-gray-200 rounded-xl">
          <div className="flex flex-row px-4 py-2">
            {star}
            <div>
              {" "}
              {avgRating} ({totalRatingsString})<span className="px-1">.</span>
            </div>
            <div className="px-2">{costForTwoMessage}</div>
          </div>
          <div className="font-bold underline text-orange-400 px-4 py-2">
            {cuisines?.join(" ,  ")}
          </div>
          <div className="px-4 py-2">{areaName}</div>
          <hr />
          <div className="px-4 py-2 flex gap-2">
            <div>{sla?.lastMileTravelString} |</div>
            <div>{sla?.slaString}</div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RestaurantDetails;
