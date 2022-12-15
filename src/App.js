import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NewsPage from "./pages/NewsPage";
import EventsPage from "./pages/EventsPage";
import RecipePage from "./pages/RecipePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./components/Contact";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import Nav from "./components/Nav";

/*"Hjem",
  "Produkter",
  "Nyheder",
  "Inspiration",
  "Om os",
  "Kontakt",*/

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<HomePage to="/" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/inspiration" element={<RecipePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
