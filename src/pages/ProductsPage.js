import React from "react";
import ShowProducts from "../components/ShowProducts";
import Footer from "../components/Footer";

export default function ProductsPage() {
  return (
    <div style={{ position: "relative", height: "auto" }}>
      <ShowProducts />
      <Footer />
    </div>
  );
}
