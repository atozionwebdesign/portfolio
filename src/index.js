import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createHashRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
