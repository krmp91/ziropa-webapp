import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NewsPage from "./pages/NewsPage";
import EventsPage from "./pages/EventsPage";
import RecipePage from "./pages/RecipePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage to="/" />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="recipe" element={<RecipePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
