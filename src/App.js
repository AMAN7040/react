import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Shimmer from "./components/Shimmer";
import userContext from "./Utils/userContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setuserName] = useState();

  //authentication
  useEffect(() => {
    const data = {
      name: "Aman singh",
    };
    setuserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedUser: userName, setuserName }}>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
