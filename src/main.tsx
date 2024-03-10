import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { default as routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);
