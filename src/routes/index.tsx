import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Details from "../components/details/Details";
import Dashboard from "./dashboard/Dashboard";
import Create from "./dashboard/create/Create";

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: 'create',
          element: <Create />
        }
      ]
    },
    {
      path: "/cars/:id",
      element: <Details />,
    },
  ]);
};

export default RouteController;
