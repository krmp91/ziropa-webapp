import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
