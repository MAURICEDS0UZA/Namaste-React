import { screen } from "@testing-library/dom";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

beforeAll(() => console.log("beforeAll "));
afterAll(() => console.log("afterAll "));
afterEach(() => console.log("aftereach "));
beforeEach(() => console.log("before each "));

describe("should combine All test case", () => {
  test("Should render header component with home", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const homebtn = screen.getByRole("link", { name: "Home" });
    expect(homebtn).toBeInTheDocument();
  });

  test("should render login button", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const loginBtn = screen.getByRole("button", { name: "Log in" });

    expect(loginBtn).toHaveTextContent("Log in");
  });

  test("should render logout button on click of login", () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const loginBtn = screen.getByText("Log in");

    expect(loginBtn).toBeInTheDocument();
    // click on login btn
    fireEvent.click(loginBtn);
    const logOutBtn = screen.getByRole("button", { name: "Log out" });
    expect(logOutBtn).toBeInTheDocument();
  });
});
