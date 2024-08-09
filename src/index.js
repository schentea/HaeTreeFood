import React from "react";
import App from './App';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import About from "./routes/About";
import Product from "./routes/Product";
import Production from "./routes/Production";
import Act from "./routes/Act";

const router = createBrowserRouter([
  {
    path: "/",
    element : <Outlet />,
    // errorElement : <NotFound />,
    children : [ 
      {
        path : "",
        element : <App />
      },
      {
        path : "/About",
        element : <About />
      },
      {
        path : "/Product",
        element : <Product />
      },
      {
        path : "/Production",
        element : <Production />
      },
      {
        path : "/Act",
        element : <Act />
      }
    ] 
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);