import { createBrowserRouter } from "react-router-dom";
import RouteLoader from "../utils/RouteLoader";
import App from "../App";
import LayoutPage from "../pages/LayoutPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, lazy: RouteLoader("landing") },
      {
        path: "login",
        lazy: RouteLoader("login"),
      },
      {
        path: "dashboard",
        Component: LayoutPage,
        children: [
          {
            index: true,
            lazy: RouteLoader("dashboard"),
          },
          {
            path: "analyzer",
            lazy: RouteLoader("analyzer"),
          },
          {
            path: "history",
            lazy: RouteLoader("history"),
          },
          {
            path: "setting",
            lazy: RouteLoader("setting"),
          },
        ],
      },
    ],
  },
]);

export default Routes;