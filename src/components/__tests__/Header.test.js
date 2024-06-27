import { screen } from "@testing-library/dom";
import Header from "../Header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("render heading", () => {
  render(<Header />);
  const heading = screen.getAllByRole("heading");
  expect(heading).toBeInTheDocument();
});
