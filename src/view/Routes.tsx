import { createBrowserRouter } from "react-router-dom";
import RouteLoader from "../utils/RouteLoader";
import App from "../App";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, lazy: RouteLoader("landing") },
      {
        path:"login",
        lazy:RouteLoader("login")
      }
    ],
  },
  // {
  //   path:"/dashboard",
  //   Component: Layout,
  //   children:[
  //     index:true, lazy:RouteLoader("home")
  //   ]
  // }
]);

export default Routes;
