const RestaurantMenu = ({ resMenuDetails }) => {
  return (
    <>
      <section className="restaurant-menu">
        <h2>Recommened</h2>
        {resMenuDetails.map((item) => {
          const { id, name, defaultPrice, price, ratings, isVeg } =
            item?.card?.info;
          console.log(item?.card?.info);
          return (
            <section key={id}>
              <div>
                <div>{isVeg ? Veg_Logo : "nonveg"}</div>
                <div>{name}</div>
                <div>Rs.{defaultPrice / 100 || price / 100}</div>
                <div>{ratings?.aggregatedRating?.rating}</div>
              </div>
              <div>
                <div>image</div>
              </div>
              <hr />
            </section>
          );
        })}
      </section>
    </>
  );
};
export default RestaurantMenu;
