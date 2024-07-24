import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Reports from "./components/Reports/Reports";
import MainLayout from "./components/MainLayout/MainLayout";
import AddTransaction from "./components/AddTransaction/AddTransaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "add-transaction",
    element: <AddTransaction />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
