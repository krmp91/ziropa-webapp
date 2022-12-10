import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  RouterProvider,
  Route,
  Link,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NewsPage from "./pages/NewsPage";
import EventsPage from "./pages/EventsPage";
import RecipePage from "./pages/RecipePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Contact from "./components/Contact";
import ErrorPage from "./pages/ErrorPage";

const AppLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "recipe",
        element: <RecipePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
