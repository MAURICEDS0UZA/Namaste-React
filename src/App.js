import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ErrorBoundary from "./components/ErrorBoundary";
import Contact from "./components/Contact";
import RestaurantCard from "./components/RestaurantCard";
import user from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";

const BodyContainer = lazy(() => import("../src/components/BodyContainer"));

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("parent constructor");
//   }

//   componentDidMount() {
//     console.log("parent Mount");
//   }

//   render() {
//     console.log("render parent");
//     return (
//       <>
//         <div className="app-container">
//           <Header />
//           <Outlet />
//         </div>
//       </>
//     );
//   }
// }

// export default App;

const App = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = { userName: "Maurice" };
    setUserName(data.userName);
  }, []);

  return (
    <>
      <Provider store={appStore}>
        <user.Provider value={{ userLogin: userName, setUserName }}>
          <Header />
          <Outlet />
        </user.Provider>
      </Provider>
    </>
  );
};

export default App;

// * Routing Into app
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BodyContainer />
          </Suspense>
        ),
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
        path: "/cart",
        element: <Cart />,
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
