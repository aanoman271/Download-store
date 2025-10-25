import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import { Component } from "react";
import Instalation from "./Instalation";
import Home from "./Home";
import Apps from "./Apps";
import AppDeatails from "./AppDeatails";
import ErrorPAge from "./ErrorPAge";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: "/instalation",
        element: <Instalation></Instalation>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "appdeatails/:id",
        element: <AppDeatails></AppDeatails>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPAge></ErrorPAge>,
  },
]);
export default router;
