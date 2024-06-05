import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ErrorBoundary from "./components/ErrorBoundary";
import Contact from "./components/Contact";
import RestaurantCard from "./components/RestaurantCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent Mount");
  }

  render() {
    console.log("render parent");
    return (
      <>
        <div className="app-container">
          <Header />
          <Outlet />
        </div>
      </>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <>
//       <div className="app-container">
//         <Header />
//         <Outlet />
//         <AboutUs val={heelo} />
//       </div>
//     </>
//   );
// };

// * Routing Into app
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyContainer />,
      },
      {
        path: "/about",
        element: <AboutUs val={"Bangalore"} />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantCard />,
      },
      {
        path: "*",
        element: <ErrorBoundary />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// *Router provider
root.render(<RouterProvider router={appRoute}></RouterProvider>);
