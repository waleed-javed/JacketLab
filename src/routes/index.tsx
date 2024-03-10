import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { About, Contact, Home, NotFoundPage } from "../pages";

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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default RoutesManager;
