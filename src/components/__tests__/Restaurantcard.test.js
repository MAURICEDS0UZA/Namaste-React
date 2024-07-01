import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FoodContainer from "../FoodContainer";
import resLists from "../mocks/foodContainer.json";
import RestaurantPromoted from "../RestaurantCard";

test("should render restaurant card in Body component", () => {
  render(<FoodContainer resLists={resLists} />);

  const cardName = screen.getByText("Wow! Momo");

  expect(cardName).toBeInTheDocument();
});
