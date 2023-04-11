import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Home/Home";
import Stat from "./stat/stat";
import Aj from "./AboutJob/Aj";
import Blog from "./Blog/Blog";
import Front from "./Front/Front";
import Viewdetails from "./viewdetails/Viewdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element: <Front></Front>
      },
      {
        path: 'stat',
        element: <Stat></Stat>
      },
      {
        path: 'aj',
        element: <Aj></Aj>,
        loader: async()=> await fetch('dev.json')
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'viewdetails/:id',
        element: <Viewdetails></Viewdetails>,
        loader: async({ params })=>await fetch(`${params.id}.json`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);