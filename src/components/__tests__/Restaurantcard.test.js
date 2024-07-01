import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FoodContainer, { withOpenRestaurantCard } from "../FoodContainer";
import resLists from "../mocks/foodContainer.json";

test("should render restaurant card in Body component", () => {
  render(<FoodContainer resLists={resLists} />);

  const cardName = screen.getByText("Wow! Momo");

  expect(cardName).toBeInTheDocument();
});

test("should render promoted restaurant card", () => {
  const RestaurantPromoted = withOpenRestaurantCard(FoodContainer);
  render(<RestaurantPromoted resLists={resLists} />);
  // searching Promoted text
  const Promoted = screen.getByText("Promoted");
  // Asseration
  expect(Promoted).toBeInTheDocument();
});
