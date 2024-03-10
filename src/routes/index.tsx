import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { Home, NotFoundPage } from "../pages";

const RoutesManager = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default RoutesManager;
