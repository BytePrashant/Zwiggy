import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import reduxStore from "./utils/reduxStore";

function AppLayout() {
  return (
    <Provider store={reduxStore}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default AppRouter;
