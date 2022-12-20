import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NewsPage from "./pages/NewsPage";
import NewsPage1 from "./pages/NewsPage1";
import NewsPage2 from "./pages/NewsPage2";
import RecipePage from "./pages/RecipePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/Nav";
import UserInspiration from "./pages/UserInspiration";
import UserProducts from "./pages/UserProducts";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <main className="bg-main">
        <Nav />
        <Routes>
          <Route>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="*" element={<HomePage to="/" />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news1" element={<NewsPage1 />} />
            <Route path="/news2" element={<NewsPage2 />} />
            <Route path="/inspiration" element={<RecipePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/addInspiration" element={<UserInspiration />} />
            <Route path="/addProducts" element={<UserProducts />} />
          </Route>
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
