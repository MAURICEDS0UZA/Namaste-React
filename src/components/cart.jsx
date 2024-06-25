import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import { clearItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => {
    return store.cart.items;
  });
  return (
    <>
      <section className="p-4 bg-gray-100 rounded-lg w-9/12 grid m-auto">
        <div className="font-semibold text-center p-4 m-2 ">
          <h2>
            Items in Cart {"  "}
            <span className="text-sky-600">{cart.length}</span>
          </h2>
        </div>

        {cart.map((foodCard) => {
          return (
            <>
              <div className="flex justify-between items-center p-4 border-t-2 flex-col">
                <Items foodCard={foodCard} />
                <button
                  onClick={() => {
                    dispatch(removeItem());
                  }}
                  className="bg-gray-600 text-white w-fit font-semibold p-2 rounded-md"
                >
                  Remove item
                </button>
              </div>
            </>
          );
        })}
      </section>
      {cart.length !== 0 && (
        <button
          onClick={() => {
            dispatch(clearItem());
          }}
          className="p-4 px-8 m-4 bg-gray-600 text-white w-fit flex  mx-auto rounded-lg "
        >
          Clear item
        </button>
      )}
    </>
  );
};

export default Cart;
